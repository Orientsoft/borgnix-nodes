Creates two messages on the output separated by a timeout whenever ANY **msg** arrives on the input.

For example, this can be used to toggle a Raspberry PI GPIO pin on and off.

The two output states can be specified as can the duration of the timer. Either output can be set to a value, or templated from the inbound **msg** using mustache syntax.

<pre>The payload is {{payload}}</pre>

If the payload is an object then setting the output to _existing payload_ will pass the complete payload object through.

Optionally the timer can be extended by being retriggered... or not.

By setting the first output to _nothing_, and selecting extend timer - a watchdog timer can be created. No output will happen as long as repeated inputs occur within the timeout period.

Setting the timer to 0 creates an "infinite" timeout - the first output will happen but the second never will, and neither can the first be retriggered - so a true one shot.

If a **msg.reset** property is present any timeout currently in progress will be cleared and the second output will not happen.