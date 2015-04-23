该节点使用Selector把**msg.payload**里HTML文件中的元素提取出来。

Selector使用[Cheerio](="https://github.com/cheeriojs/cheerio/blob/master/Readme.md") 并采用[CSS selector](https://github.com/fb55/CSSselect#user-content-supported-selectors) 语法。

其结果可以是单个消息和一个存储了匹配元素的队列的**playlod**,或者多条只包含一个已匹配元素的消息。

*   `Select`分隔符
*   `Output.Content`输出内容格式
*   `Output`输出方式
*   `Name`名称