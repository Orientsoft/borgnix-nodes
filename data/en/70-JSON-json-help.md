A function that parses the **msg.payload** to convert a JSON string to/from a javascript object. Places the result back into the payload.

If the input is a JSON string it tries to parse it to a javascript object.

If the input is a javascript object it creates a JSON string.