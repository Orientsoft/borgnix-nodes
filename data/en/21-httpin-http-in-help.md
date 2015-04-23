Provides an input node for http requests, allowing the creation of simple web services.

The resulting message has the following properties:

*   msg.req : [http request](http://expressjs.com/api.html#req)
*   msg.res : [http response](http://expressjs.com/api.html#res)

For POST/PUT requests, the body is available under `msg.req.body`. This uses the [Express bodyParser middleware](http://expressjs.com/api.html#bodyParser) to parse the content to a JSON object.

By default, this expects the body of the request to be url encoded:

<pre>foo=bar&this=that</pre>

To send JSON encoded data to the node, the content-type header of the request must be set to `application/json`.

**Note:** This node does not send any response to the http request. This should be done with a subsequent HTTP Response node, or Function node. In the case of a Function node, the [Express response documentation](http://expressjs.com/api.html#res) describes how this should be done. For example:

<pre>msg.res.send(200, 'Thanks for the request ');  
return msg;</pre>