写入文件节点

将 `msg.payload`的内容写入到指定的文件里面, 例如创建一个日志.

文件名可以在节点的配置面板中进行配置, 如果不进行配置，那么 传入的消息的filename将会赋值给`msg.filename`.

“Add newline (\n) to each payload ”选项是可选的.如果你选择了这个功能，那么每次写入消息时都会添加到新的一行.

可选的操作有：append to file，overwrite file和delete file

默认的操作是append to file. 例如你想要输出一个静态web页面或者一份报告，你就可以通过overwrite file方式来写入文件,

如果需要的话，本节点还可以通过配置，然后可以删除指定的文件. _Note:_ 不过现在已经不提倡使用msg.delete了.

*   **Filename**文件名
*   **action**进行的操作