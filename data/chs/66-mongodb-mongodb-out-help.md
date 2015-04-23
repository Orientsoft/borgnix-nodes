MongoDB输出节点

本节点是一个简单的MongoDB输出节点. 能够在一个选中的集合里保存、插入、更新、删除对象.

对于已经存在的对象，save操作会更新该节点，如果该对象不存在，那么save操作会插入一个新对象.

insert操作会插入一个新对象.

save和insert操作会保存 `msg` 或 <cdoe>msg.payload.</cdoe>

update会修改已经存在的一个或多个对象. 在查询需要更新的对象时，使用`msg.query` .在查询需要更新的元素时，则使用`msg.payload`.

在update一个对象时，如果该对象不存在，那么update操作会添加一个新对象.此外，update操作也可以更新多个对象.

delete操作会删除那些符合 `msg.payload`中查询语句的对象. 如果没有查询语句，那么集合里 _所有的对象_都会被删除.

你可以在配置面板中或者通过 `msg.collection`来设置集合里面的方法. 在配置面板中设置之后会覆盖 `msg.collection`里的内容.

默认的MongoDB会创建__id_ 属性来作为主键 - 所以对相同`msg`的重复的注入会产生众多数据库entry.

如果你不想这种情况发生，比如你想要将重复的entry直接覆盖掉, 那么你必需通过上一个function节点设置 `msg._id` 属性的值为constant.

`msg._id`应该是一个独一无二的标识，否则的话你可以创建一个基于其他msg属性的的常量.

目前为止我们没有限制或者限定collection的大小... 不过以后可能会做出调整.

*   **server**MongoDB服务器
*   **collection**
*   **operation**执行的操作