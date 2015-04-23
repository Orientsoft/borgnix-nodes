延时输出节点

通过一个计时器，在任意时刻`msg`到达后，立即输出第一个消息，在间隔时间后再输出第二个消息.

例如, 这个节点可以用来转化一个Raspberry PI GPIO pin 的开与关.

每一个输出可以进行三种设置:the value below、the existing payload以及nothing

选择_the value below_，可以设定为任意一个值作为输出, 或者输入一句mustache语句对`msg` 里的相应属性进行规范化，规范化的结果作为输出.

例如,输入

<pre>the payload is {{payload}}</pre>

输出就为

<pre>the payload is {{接收到的msg.payload里的内容}}</pre>

选择_existing payload_ 会将接收到的整个payload作为输出传递下去.

选择_nothing_则意味着不会有输出产生.

你也可以选择是一些额外的限定条件，在and属性里你可以选择_extend the timer if retriggered_和_extend the timer if retriggered_

如果你选择了_extend the timer_，在间隔时间内接收到重复的消息时，不会产生第二个输出

例如，设置第一个输出为_nothing_, 并且选择_extend the timer if retriggered_.这样就可以创建出一个监视器.如果在时间间隔之内有重复的输入，那么不会产生任何的输出.

设定计时器为0的话即为间隔时间无限，即能够产生第一个输出，但是不会产生第二个输出,同时二者都不能够再次触发 - 所以仅仅只能够产生一次输出.

如果时间间隔内接收到的消息中`msg.reset` 属性非空，那么该该时间间隔内不会产生第二个输出.

*   **output**第一个输出
*   **then wait**间隔时间
*   **output**第二个输出
*   **and**