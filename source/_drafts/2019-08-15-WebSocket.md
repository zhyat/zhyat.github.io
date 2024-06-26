---
title: WebSocket
tags: 网络
---

websocket 是一个全双工通讯的协议，在2011年已经成为了国际标准，现在所有浏览器都支持了。

## 为什么要用 websocket ?
我们已经有 http 了，为什么还要用 websocket 呢？
因为 http 只能由客户端向服务端发起，只能单向请求。在服务器状态变化比较多的时候，只能通过轮询或者不关闭 http 连接来通信，最常见的例子就是聊天室和扫码登录。
而 websocket 就应运而生。

## 什么是 websocket ？
https://www.cnblogs.com/chyingp/p/websocket-deep-in.html
http://www.ruanyifeng.com/blog/2017/05/websocket.html