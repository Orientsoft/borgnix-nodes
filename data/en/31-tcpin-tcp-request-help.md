A simple TCP request node - sends the **msg.payload** to a server tcp port and expects a response.

Connects, sends the "request", reads the "response". It can either count a number of returned characters into a fixed buffer, match a specified character before returning, wait a fixed timeout from first reply and then return, or just sit and wait for data.

The response will be output in **msg.payload** as a buffer, so you may want to .toString() it.

If you leave tcp host or port blank they must be set by using the **msg.host** and **msg.port** properties.