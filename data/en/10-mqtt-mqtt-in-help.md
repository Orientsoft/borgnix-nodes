MQTT input node. Connects to a broker and subscribes to the specified topic. The topic may contain MQTT wildcards.

Outputs an object called **msg** containing **msg.topic, msg.payload, msg.qos** and **msg.retain**.

**msg.payload** is usually a string, but can also be a binary buffer.