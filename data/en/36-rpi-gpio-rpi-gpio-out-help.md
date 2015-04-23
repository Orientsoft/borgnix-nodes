Raspberry Pi output node. Expects a **msg.payload** with either a 0 or 1 (or true or false). Requires the gpio command to work.

Will set the selected physical pin high or low depending on the value passed in.

The initial value of the pin at deploy time can also be set to 0 or 1.

When using PWM mode - expects an input value of a number 0 - 100.

Requires the RPi.GPIO python library version 0.5.8 (or better) in order to work.

**Note:** we are using the actual physical pin numbers on connector P1 as they are easier to locate.