The Debug node can be connected to the output of any node. It can be used to display the output of any message property in the debug tab of the sidebar. The default is to display **msg.payload**.

Each message will also display the timestamp, **msg.topic** and the property chosen to output.

The sidebar can be accessed under the options drop-down in the top right corner.

The button to the right of the node will toggle its output on and off so you can de-clutter the debug window.

If the payload is an object or buffer it will be stringified first for display and indicate that by saying "(Object)" or "(Buffer)".

Selecting any particular message will highlight (in red) the debug node that reported it. This is useful if you wire up multiple debug nodes.

Optionally can show the complete **msg** object.

In addition any calls to node.warn or node.error will appear here.