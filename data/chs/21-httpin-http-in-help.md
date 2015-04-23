## HTTP输入节点。

Provides an input node for http requests, allowing the creation of simple web services.

节点输出的Message有以下属性:

*   msg.req : [http request](http://expressjs.com/api.html#req)
*   msg.res : [http response](http://expressjs.com/api.html#res)

对于POST和PUT请求，消息体使用 [Express bodyParser middleware](http://expressjs.com/api.html#bodyParser) 进行解析，并以JSON对象的形式存储在`msg.req.body`中。

默认情况下，消息体应使用URL编码

<pre>foo=bar&this=that</pre>

消息体如果是JSON格式，HTTP请求的content-type头必须设置为 `application/json`.

*   **Method**
*   **URL**
*   **Name**

**Note:** HTTP输入节点并对请求做应答，若要做应答，请使用HTTP输出节点 或者函数节点。 使用函数节点进行HTTP应答，可以参考[Express response documentation](http://expressjs.com/api.html#res) 例如：

<pre>msg.res.send(200, 'Thanks for the request ');  
return msg;</pre>