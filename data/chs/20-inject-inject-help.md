按下左边的按钮使topic中的消息注入流中。该节点主要用于测试。

Payload默认使用自1970算起毫秒级的当前时间，但是也可以设为字符串或空白。

repeat函数允许payload按照需要的时间表发送。

_Fire once at start_是在注入数据前等待一个很短的时间，来让其他节点正确地初始化。

**Note: **"Interval between times"和"at a specific time"选项使用_cron_。 这意味着将会等到下一个小时才会执行20分钟,20分钟后又会等待40分钟-并不是在20分钟内完成。如果你想要每20分钟一次，你应该选择_interval_

*   `Payload`Payload类型
*   `Topic`
*   `Reapeat`重复方式
*   `Name`名称