MQTT输出节点。 连接到MQTT代理并将**msg.payload**发布到 节点设置中设定的topic， 如果节点没有设置topic，则将消息发布到**msg.topic**。

如果不在节点中设置QoS和retain参数， 则使用**msg.qos**和**msg.retain** 。 如果在节点设置和**msg**对象中都没有设置，则使用 _0_和_false_作为默认值。

如果**msg.payload**是一个对象，它会先被转换为字符串再发送。

参数

*   **Broker**
*   **Topic**
*   **Qos**
*   **Retain**
*   **Name**