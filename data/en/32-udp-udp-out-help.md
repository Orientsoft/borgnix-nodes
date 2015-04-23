This node sends **msg.payload** to the designated udp host and port. Supports multicast.

You may also use **msg.ip** and **msg.port** to set the destination values.  
**Note**: the statically configured values have precedence.

If you select broadcast either set the address to the local broadcast ip address, or maybe try 255.255.255.255, which is the global broadcast address.

On some systems you may need to be root to use ports below 1024 and/or broadcast.