Writes **msg.payload** to the file specified, e.g. to create a log.

The filename can be configured in the node, if left blank it should be set in an incoming message on **msg.filename**.

A newline is added to every message. But this can be turned off if required, for example, to allow binary files to be written.

The default behaviour is to append to the file. This can be changed to overwrite the file each time, for example if you want to output a "static" web page or report.

This node can also be configured to delete a file if required. _Note:_ Using msg.delete is now deprecated.