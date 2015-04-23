A simple function node to route messages based on its properties.

When a message arrives, the selected property is evaluated against each of the defined rules. The message is then sent to the output of _all_ rules that pass.

Note: the _otherwise_ rule applies as a "not any of" the rules preceding it.