A function block where you can write code to do more interesting things.

The message is passed in as a JavaScript object called `msg`.

By convention it will have a `msg.payload` property containing the body of the message.

#### Logging and Error Handling

To log any information, or report an error, the following functions are available:

*   `node.log("Log")`
*   `node.warn("Warning")`
*   `node.error("Error")`

The Catch node can also be used to handle errors. To invoke a Catch node, pass `msg` as a second argument to `node.error`:

<pre>node.error("Error",msg)</pre>

#### Sending messages

The function can either return the messages it wants to pass on to the next nodes in the flow, or can call `node.send(messages)`.

It can return/send:

*   a single message object - passed to nodes connected to the first output
*   an array of message objects - passed to nodes connected to the corresponding outputs

If any element of the array is itself an array of messages, multiple messages are sent to the corresponding output.

If null is returned, either by itself or as an element of the array, no message is passed on.

See the [online documentation](http://nodered.org/docs/writing-functions.html) for more help.