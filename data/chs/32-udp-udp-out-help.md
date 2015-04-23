UDP输出节点。将**msg.payload**发送到一个UDP服务器端口，支持组播

如果不在节点中设置服务器的主机名和端口， 则使用**msg.ip**和**msg.port**

If you select broadcast either set the address to the local broadcast ip address, or maybe try 255.255.255.255, which is the global broadcast address.

在某些操作系统上，可能需要root权限以使用小于1024的端口或进行广播

参数

*   **Message Type**
*   **Address**
*   **Name**