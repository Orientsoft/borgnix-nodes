Catch errors thrown by nodes on the same tab.

If a node throws a error whilst handling a message, the flow will typically halt. This node can be used to catch those errors and handle them with a dedicated flow.

The node will catch errors thrown by any node on the same tab. If there are multiple catch nodes on a tab, they will all get triggered.

If an error is thrown within a subflow, the error will get handled by any catch nodes within the subflow. If none exists, the error is propagated up to the tab the subflow instance is on.

The message sent by this node will be the original message if the node that threw the error provided it. The message will have an `error` property with the following attributes:

*   `message` : the error message
*   `source.id` : the id of the node that threw the error
*   `source.type` : the type of the node that threw the error

If the message already had a `error` property, it is copied to `_error`.