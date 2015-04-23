Reads data from a local serial port.

Can either

*   wait for a "split" character (default \n). Also accepts hex notation (0x0a).
*   Wait for a timeout in milliseconds for the first character received
*   Wait to fill a fixed sized buffer

It then outputs **msg.payload** as either a UTF8 ascii string or a binary Buffer object.

If no split character is specified, or a timeout or buffer size of 0, then a stream of single characters is sent - again either as ascii chars or size 1 binary buffers.