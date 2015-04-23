通过已选中的操作来调用一个MongoDB方法.

每一次调用.find()函数都使用**msg.payload**来作为查询语句，以此对一个集合进行查询. 相应的, 你也可以(通过一个函数)设置 **msg.projection** 对象来约束返回的范围, 也可以设置**msg.sort**对象,**msg.limit**的数值和**msg.skip**的数值.

计算集合里返回的文档的数目或者使用**msg.payload**作为查询语句返回的结果数.

Aggregate通过使用**msg.payload**作为管道矩阵，提供了对aggregation pipeline的访问.

你可以在配置面板中或者通过 **msg.collection**来设置集合里面的方法. 在配置面板中设置之后会覆盖 **msg.collection**里的内容.

点击查看[_MongoDB集合方法_](http://docs.mongodb.org/manual/reference/method/db.collection.find/)文件中的例子.

结果返回在**msg.payload**中.