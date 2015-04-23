MongoDB输入节点

通过在配置面板中选择的操作来调用的MongoDB方法.

提供了Find,Count和Aggregate三个操作

Find操作会调用.find()函数，并且使用`msg.payload`来作为查询语句，以此实现对一个collection的查询. Optionally, you may also (via a function) set a `msg.projection` object to constrain the returned fields, a `msg.sort` object, a `msg.limit` number and a `msg.skip` number.

Count操作会返回collection中document的数目或者使用`msg.payload`作为查询语句，返回结果的数目.

Aggregate使用`msg.payload`作为pipeline array，提供了对aggregation pipeline的访问功能.

你可以在配置面板中或者通过 `msg.collection`来设置集合里面的方法. 在配置面板中设置之后会覆盖 `msg.collection`里的内容.

点击查看[_MongoDB集合方法_](http://docs.mongodb.org/manual/reference/method/db.collection.find/)文件中的例子.

操作结果结果返回在`msg.payload`中.

*   **server**MongoDB服务器
*   **collection**
*   **operation**执行的操作