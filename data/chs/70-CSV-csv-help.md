该函数接受并且解析**msg.payload**消息以把CSV转化为一个javascript对象，或者把javascript对象转化为XML消息。 其结果存储在**payload**中。

如果接受一个字符串，该节点将把字符串用**CSV**语法解析并创建一个javascript对象

如果接受一个javascript对象，该节点将创建一个**CSV**字符串

列表模板是包含列标题的有序列表。对于输入的**CSV**，列表成为其中的属性名。 对于输出**CSV**列表指定了提取到对象中的属性，以及**CSV**的顺序

**Note:** 行之间必须用规定的符号分隔开 - 即使另一个分隔符被选择为数据。

*   `Columns`名称
*   `Separator`分隔符
*   `Name`名称
*   `Output`输出格式
*   `Newline`换行符