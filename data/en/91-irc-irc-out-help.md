Sends messages to a channel on an IRC server

You can send just the `msg.payload`, or the complete `msg` object to the selected channel, or you can select to use `msg.topic` to send the `msg.payload` to a specific user (private message) or channel.

If multiple output channels are listed (eg. #chan1,#chan2), then the message will be sent to all of them.

**Note:** you can only send to channels you have previously joined so they MUST be specified in the node - even if you then decide to use a subset in msg.topic

You may send RAW commands using `msg.raw` - This must contain an array of parameters - eg.

<pre>["privmsg","#nodered","Hello world"]</pre>