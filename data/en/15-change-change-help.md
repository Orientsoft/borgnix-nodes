Set, change or delete properties of a message.

The node can specify multiple rules that will be applied to the message in turn.

The available operations are:

*   **Set** - set a property. The **to** property can either be a string value, or reference another message property by name, for example: `msg.topic`.
*   **Change** - search & replace parts of the property. If regular expressions are enabled, the **replace with** property can include capture groups, for example `$1`
*   **Delete** - delete a property.