Calls out to a system command.  

Provides 3 outputs... stdout, stderr, and return code.

By default uses exec() which calls the command, blocks while waiting for completion, and then returns the complete result in one go, along with any errors.

Optionally can use spawn() instead, which returns output from stdout and stderr as the command runs (ie one line at a time). On completion it then returns a return code (on the 3rd output).

Spawn only expects one command word, with all extra parameters to be comma separated and passed as the append.

The optional append gets added to the command after the **msg.payload** - so you can do things like pipe the result to another command.

If stdout is binary a _buffer_ is returned - otherwise returns a _string_.