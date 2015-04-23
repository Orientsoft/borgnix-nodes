# 注入流节点

按下左边的按钮使topic中的消息注入流中。该节点主要用于测试。

Payload默认使用毫秒级的当前时间，但是也可以设为字符串或空白。

repeat函数允许payload按照需要的时间表发送。

选择**Fire once at start**后会在注入数据前等待一个很短的时间，来让其他节点正确地初始化。

**Note:** **at a specific time**选项使用_[cron](http://zh.wikipedia.org/zh/Cron)_。 这意味着会在的特定时间点注入（例如10:15注入）,之后又会等到下一时间点，而不是每一段时间注入一次。如果你想要每一段时间注入一次，你应该选择**Interval between times**或者**interval**

*   **Payload:**Payload类型
*   **Topic:**
*   **Reapeat:**重复方式
*   **Name:**名称