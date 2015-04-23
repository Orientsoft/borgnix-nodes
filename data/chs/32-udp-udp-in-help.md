UDP输入节点。

接收并在**msg.payload**中输出_BUFFER_、 字符串或Base64编码的字符串。支持组播。 

消息发送方的IP地址和端口号记录在**msg.ip**和**msg.port**中。

在某些操作系统上，可能需要root权限以使用小于1024的端口或进行广播

参数

*   **Listen for**
*   **on Port**
*   **Output**
*   **Name**