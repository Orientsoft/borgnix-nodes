时延节点

在一个流中引入时延或者限制消息的传输速率.

你可以选择的动作包括Delay message，Radom delay，Limite rate to以及topic based fair queue

默认的时延是5秒，速率限制为1 msg/second, 但是两者都可以进行配置.

如果你选择了rate limit，如果接收到超出限制的中间信息，你可以选择丢弃掉他们 .

如果你选择了Topic based fair queue，接收到的消息会根据`msg.topic`属性而被加入对应的等待释放的队列. 在每经历一次时间间隔，就会释放下一个"topic"的消息.新到达的消息会占据释放队列队首的位置，而其他消息依次向后排列. 如果存在不同的topic，那么会依次的循环的释放每一个topic，但是被发送的总是最近到达的消息.

*   **action**选择的操作
*   **for**时延的时间
*   **rate**限制的速率