Raspberry Pi input node. Generates a **msg.payload** with either a 0 or 1 depending on the state of the input pin. Requires the gpio command to work.

You may also enable the input pullup resistor or the pulldown resistor.

The **msg.topic** is set to _pi/{the pin number}_

Requires the RPi.GPIO python library version 0.5.8 (or better) in order to work.

**Note:** we are using the actual physical pin numbers on connector P1 as they are easier to locate.