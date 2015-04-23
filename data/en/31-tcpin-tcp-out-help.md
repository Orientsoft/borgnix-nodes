Provides a choice of tcp outputs. Can either connect to a remote tcp port, accept incoming connections, or reply to messages received from a TCP In node.

Only **msg.payload** is sent.

If **msg.payload** is a string containing a Base64 encoding of binary data, the Base64 decoding option will cause it to be converted back to binary before being sent.