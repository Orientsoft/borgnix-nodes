Connects to a MQTT broker and publishes **msg.payload** either to the **msg.topic** or to the topic specified in the edit window. The value in the edit window has precedence.

Likewise QoS and/or retain values in the edit panel will overwrite any **msg.qos** and **msg.retain** properties. If nothing is set they default to _0_ and _false_ respectively.

If **msg.payload** contains an object it will be stringified before being sent.