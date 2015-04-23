WebSocket input node.

By default, the data received from the WebSocket will be in **msg.payload**. The socket can be configured to expect a properly formed JSON string, in which case it will parse the JSON and send on the resulting object as the entire message.