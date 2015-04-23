HTTP请求节点

URL和HTTP方法参数可以在节点设置中设置，如果没有设置， 则会使用`msg.url`和`msg.method`。 

`msg`包含以下属性：

*   `url`：HTTP请求的URL，必须以http:或https:开头
*   `method`：HTTP方法，只能是`GET`、`PUT`、`POST`、`PATCH`或`DELETE`中的一个，默认为`GET`
*   `headers`：HTTP报头，一个包含多个键值对的对象
*   `payload`：消息体

在节点设置中设置URL参数时，URL可以包含 [ mustache](http://mustache.github.io/mustache.5.html)风格的标签。这些标签可以通过输入msg的属性来设置URL。   
 如果将URL设定为`example.com/{{{topic}}}`, it will have the value of `msg.topic` automatically inserted. Using {{{...}}} prevents mustache from escaping characters like / & etc. 

节点输出的Message有以下属性

*   `payload`HTTP应答的消息体
*   `statusCode`HTTP状态码
*   `headers`HTTP应答的头部行

参数

*   **Method**
*   **Url**
*   **Return**
*   **Name**