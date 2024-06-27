---
title: jQuery DOM操作
date: 2017-09-25
updated: 2017-11-02
tags:
  - FrontEnd
categories: 
  - JavaScript
  - jQuery
---

> Write Less，Do More

从最基本DOM操作开始。

<!-- more -->

## 概述

###  jQuery语句组成

jQuery的命令都由四个部分组成：\$,selector，action，parmaeters组成，如:` $('P').css('color','red'); `

通常一个命令中包含几件事：
1. 使用选择器选择页面上的一个或多个元素
2. 选择一个操作应用于选择的元素
3. 传入参数

那么，上面那条命令实际上就是：

1. 使用选择器选择了页面上的所有段落元素
2. 操作这个元素的CSS
3. 传入参数，表明是将CSS的color属性设置为红色

当然一提到选择器，就必须提到DOM树。

### DOM 

DOM意为文档对象模型，是HTML表示对象的一种标准方式，是HTML标签的层级化表示。

简单来说，在这个层次中，每个元素都有一个父元素，也可以有一个或多个子元素。每个元素都可以有一个id和一个或多个class。

在这里只是简单提到DOM，需要深入了解的话，可以去看《JavaScript DOM 编程艺术》。



## 选择

### 选择器

#### 基本选择器
- 选取所有的css标签：`$("*") `
- 选取所有的id名为id1的标签：`$("#id1")`
- 选取所有的class名为class_name的标签：`$(".class_name") `
- 选取所有的标签名为element1的标签：`$("element1")  `
- 选取符合这三个条件中任何一个条件的标签：`$(".class,p,div") `

#### 层级选择器
- 后代选择器：`$(".father_div div")`
- 子代选择器：`$(".father_div>div") `
- 毗邻选择器：`$(".father_div+div") `
- 普通相邻选择器：`$(".father_div~div")`

#### 基本筛选器
- 选取第一个div标签：`$("div:first")`
- 选取最后一个div标签：`$("div:last")`
- 选取索引为n的div标签：`$("div:eq(n)")`
- 选取索引小于n的div标签：`$("div:lt(n)")`
- 选取索引大于n的div标签：`$("div:gt(n)")`
- 选取索引为偶数的div标签：`$("div:even")`
- 选取索引为奇数的div标签：`$("div:odd")`
- 当前获取焦点的元素：`$(":focus")`
- 正在执行动画效果的元素：`$(":animated")`

#### 属性选择器
- 获取所有的"id='idA'"这个属性的标签：`$("[id='idA']")`
- 获取所有的"name='img_list'"这个属性的标签：`$("[name='img_list']")`
- 选取所有的href属性的元素：` $("[href]")`
- 选取所有的target属性值等于"_blank"的 <a> 标签：` $("a[target='_blank']") `
- 选取所有的target属性值不等于"_blank"的 <a> 标签：` $("a[target!='_blank']") `

#### 表单选择器
- 获取所有处于选中状态的复选框：`$("input:checked")`
- 获取所有的input,textarea,select和button元素：`$(":input")`
- 获取所有的单行文本框：`$(":text")`
- 获取所有的密码框：`$(":password")`
- 获取所有的单选按钮：`$("radio")`
- 获取所有的复选框：`$("checkbox")`
- 获取所有的提交按钮：`$("submit")`
- 获取所有的重置按钮：`$("reset")`
- 获取所有的button按钮：`$("button")`
- 获取所有的文件域：`$("file")`

#### 过滤选择器
- 获取列表中索引为n的标签：`$("li").eq(n)`
- 获取列表中的第一个标签：`$("li").first()`
- 查询列表中是否有"test"这个类：`$("ul li").hasclass("test")`
#### 查找选择器
- 查找div标签中包含divA的所有子类标签：`$("div").children(".divA")`
- 查找div标签中包含divB的所有的后代标签：`$("div").find(".divB")`
- 获取classA这个类的下一个标签：`$(".classA").next()`
- 获取classA这个类的后面的所有标签：`$(".classA").nextAll()`
- 获取classA这个类后面,直到classB之间的所有标签：`$(".classA").nextUntil("classB")` *不含classB*
- 获取classA类的前一个标签：`$(".classA").prev()`
- 获取classA类的所有的标签：`$(".classA").prevAll() `
- 获取classA类之前,直到classB(不含div2)的所有的标签：`$(".classA").prevUntil(classB) `
- 获取classA类的所有的同级标签 ：`$(".classA").siblings()`
- 获取classA类的父标签：`$(".classA").parent()`
- 获取classA类所有的父标签(包括父标签,父标签的父标签等,直到最上一级标签为止：`$(".classA").parents()`
- 获取classA类所有的父标签,直到指定的条件停止：`$(".classA").parentsUntil()`

#### 以元素类型选择

以`$('HTML标签')`构成，例如：

选择行： `$('tr')`

选择段落： `$('div')`

选择标题： `$('h1')`

选择输入框： `$('input')`

### 例子
用一张表格举例，如下图：

![举例表格](2017-10-23_table.jpg)

*Html Markup*

```html
		<div id="table-zebra">
			<table class="data" id="celebs">
				<thead>
					<tr>
						<th>ID</th>
						<th>Name</th>
						<th>Occupation</th>
						<th>Approx.Location</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbady>
					<tr>
						<td>203A</td>
						<td>Johny</td>
						<td>Front-man</td>
						<td>Los Angeles</td>
						<td>$39.95</td>
					</tr>
					<tr>
						<td>141B</td>
						<td>Beau</td>
						<td>Singer</td>
						<td>New York</td>
						<td>$39.95</td>
					</tr>
					<tr>
						<td>2031</td>
						<td>Mo Fat</td>
						<td>Producer</td>
						<td>New York</td>
						<td>$19.95</td>
					</tr>
					<tr>
						<td>007F</td>
						<td>Kellie Kelly</td>
						<td>Singer</td>
						<td>Omaha</td>
						<td>$11.95</td>
					</tr>
					<tr>
						<td>8A05</td>
						<td>Darth</td>
						<td>DJ</td>
						<td>London</td>
						<td>$19.95</td>
					</tr>
					<tr>
						<td>6636</td>
						<td>Glendatronix</td>
						<td>Keytarist</td>
						<td>London</td>
						<td>$39.95</td>
					</tr>
				</tbady>
			</table>
		</div>
```

#### 以id和class选择

假设有多个表格，而只需要选择这整个表格，可以根据**id**或**class**来选择:

按id选择，在#号后加元素的id，并将其作为字符串传入jQuery函数： ``$('#celebs')``

按class选择，在句点(.)后加元素的类名(class)，并将其作为字符串传入jQuery函数： ``$('.data')``

#### 缩写选择范围

可以根据层级关系，进一步选择元素。祖先和后代之间留一空格即可。

假设想要选择到这个表格的行，可以这样写`$('#celebs tr')`

#### 使用筛选器

加到要筛选的项目上，以冒号(:)进行定义，其后接筛选器的名称。

再进一步，假设我们想选择这个表格的偶数行，`$('#celebs tr:even')`

*even: 保留选择器中索引号为偶数的元素，删除其余元素*

## 修饰

添加和删除样式、类及其他

### 处理CSS
#### 读取CSS
访问CSS，读取classA的字体大小：`$('.classA').css('font-size)`
#### 设置CSS
修改CSS，设置classA的字体大小：`$('.classA').css('font-size','12px')`
#### 移除CSS类
移除CSS，移除div的oldCss类：`$('div').removeClass('oldCss')`
#### 添加CSS类
添加CSS，添加div的newCss类；`$('div').addClass('newCss')`
#### 切换类
切换CSS，切换div的toggleCss类；`$('div').toggleClass('toggleCss')`
*添加或者移除CSS类：如果CSS类已经存在，它将被移除；相反，如果CSS类不存在，它将被加上*
### 例子
在将上一节提到的表格改造成斑马条纹的，形如：
![修饰举例表格](2017-10-30_zebra.jpg)

#### 逐条设置CSS
```js
// 将表格中的偶数行的背景颜色设置为#ddd
$('#celebs tbody tr:even').css('background-color','#ddd');
// 将表格中的偶数行的字体颜色设置为#666
$('#celebs tbody tr:even').css('color','#666');
```

#### 使用对象字面量（object literal）来设置多个属性

如果需要设置的属性很多，一条条代码来写显然非常麻烦和繁琐。jQuery提供了一种一颗同时设置多个属性的方法，即使用对象字面量。对象字面量封装在尖括号内，里面的每个键和值之间用冒号分隔，每对键值之间用逗号分隔，例如：

```js
$('celebs tbody tr:even').css({
  'background-color':'#ddd',
  'color':'#666',
  'font-size':'11pt',
  'line-height':'2.5em'
});
```

#### 添加和删除类

通常并不推荐在HTML/CSS使用内联样式，为了保持代码整洁、便于维护、通常会使用外联样式。这一点在使用就jQuery的时候也同样适用。在这一节，我们将样式放在样式表内，通过添加和删除类来达到同样的效果。

首先在HTML内添加一个CSS文件的链接：

*Html Markup* 

```html
<head>
  ...
  <title>zebra table</title>
  <link rel="stylesheet" href="zebra.css">
</head>
```

然后将新规则添加到新的CSS文件中：

*zebra.css*

```css
.zebra{
    background-color:#666;
    color: #ddd;
}
```

最后，回到JavaScript文件中，添加CSS类：

```js
$("#table-zebra table tbody tr:even").addClass('zebra');
```

当然要删除的话也特别简单：

```js
$("#table-zebra table tbody tr:even").removeClass('zebra');
```



## 增强

### 事件

#### 事件处理器
故名思意，用于处理事件。事件是在网页发生的操作，当事件发生时，我们称此为触发了事件，当我们编写代码处理事件时，我们称此为捕获了事件。

1. 浏览器事件
2. 文档加载
3. 绑定事件处理器
4. 事件对象
5. 键盘事件
6. 鼠标事件
  具体的说明请参考：[Jquery中文文档-事件](http://www.jquery123.com/category/events/)

#### 显示、隐藏和切换元素

1. 显示：`hide()`
2. 隐藏：`hide()`
3. 切换：`toggle()`

#### 添加和删除元素

1. 添加新元素：实际上，放在jQuery函数内的任何有效的HTML字符串都会被创建，例如创建一个锻炼元素：`$('<p>A new paragraph!</p>')`
2. 插入元素：将元素创建后还需要将它放入页面中。
  - `insertAfter('#idA')`将元素插入在id为idA的元素后面。
  - `insertBefore('#idB')`将元素插入在id为idB的元素前面。
  - `prependTo('idC')`将元素作为id为idC的子元素插入到最前面。
  - `appendTo('idD')`将元素作为id为idD的子元素插入到最后面。
3. 删除元素：`remove()`
4. 修改内容：

   - 修改为HTML:`html()`
   - 修改为纯文本：`text()`

### 例子
要达成的效果如图一：
![举例.gif](2017-11-02-exp.gif)
首先，我们创建一个结构如图的html文件，并且引入jQuery文件和我们自定义的js文件。
![免责声明举例](2017-11-02_statement.jpg)
然后我们添加一个按钮：
*Js File*
```js
$(document).ready(function () {
	$('<input type="button" value="hide" id="hideButton">').insertAfter('#statement');
});
```

然后我们为这个按钮添加click事件，让其点击之后就将免责声明隐藏：

*Js File*

```js
$('#hideButton').click(function () { 
		$("#statement").hide();
});
```

文件隐藏后再点击按钮就显示免责声明：

*Js File*

```js
$(document).ready(function () {
	$('<input type="button" value="Show" id="toggleButton">').insertAfter('#statement');

	$('#toggleButton').click(function () { 
		if ($('#statement').is(':visible')) {
			$('#statement').hide();
			$(this).val('Show');
		}else{
			$('#statement').show();
			$(this).val('Hide');
		}
	});
});
```

***is操作接受传递给jQuery函数的任何选择器，检查它们与调用元素是否匹配***

***this引用了jQuery函数选择的元素***

现在效果如图二：

![举例.gif](2017-11-02-exp2.gif)

但实际上，jQuery有切换的函数：

```js
$(document).ready(function () {
	$('<input type="button" value="Show" id="toggleButton">').insertAfter('#statement');

	$('#toggleButton').click(function () { 
		$('#statement').toggle();
	});
});
```



添加一些特效(之后的文章会详细说明)

```js
$(document).ready(function () {
	$('<input type="button" value="Toggle" id="toggleButton" >').insertAfter('#statement');
	$('#toggleButton').click(function () {
		if ($('#statement').is(':visible')) {
			$('#statement').fadeOut();
			$(this).val('Hide');
		} else {
			$('#statement').fadeIn();
			$(this).val('Show');
		}
	});
});
```

---

参考资料：《jQuery从菜鸟到忍者》

