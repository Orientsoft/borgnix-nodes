# JSON转换节点

该函数接受并且解析`msg.payload`消息以把XML转化为一个JSON对象，或者把javascript对象转化为JSON消息。 其结果存储在payload中。其结果放回到payload中

如果接受一个JSON串，该节点将字符串解析并创建一个javascript对象

如果接受一个javascript对象，该节点将创建一个JSON字符串

*   **Name:**名称