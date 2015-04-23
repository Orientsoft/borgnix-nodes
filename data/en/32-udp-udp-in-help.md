A udp input node, that produces a **msg.payload** containing a _BUFFER_, string, or base64 encoded string. Supports multicast.

It also provides **msg.ip** and **msg.port** to the ip address and port from which the message was received.

On some systems you may need to be root to use ports below 1024 and/or broadcast.