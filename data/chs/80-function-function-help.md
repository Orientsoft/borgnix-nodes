你可以在这个节点里面编写函数来实现需要的功能

消息是一个JavaScript对象，叫做 `msg`.

按照惯例，消息里面会有`msg.payload` 属性，包含了消息的主体

编写的函数必须返回一条消息传递给下一个节点：

*   一个单独的消息的对象 - 传递给连接到第一个输出的节点

如果返回null，就没有消息发送到下一个节点。

[查看帮助](http://nodered.org/docs/writing-functions.html)