TCP请求节点

将**msg.payload**发送到一个TCP服务器端口，并接收应答。

Connects, sends the "request", reads the "response". It can either count a number of returned characters into a fixed buffer, match a specified character before returning, wait a fixed timeout from first reply and then return, or just sit and wait for data.

收到的应答会以二进制buffer的形式存储在**msg.payload**中。

如果不在节点中设置服务器的主机名和端口， 则会使用**msg.host**和**msg.port**

参数

*   **Server**
*   **Return**
*   **Name**