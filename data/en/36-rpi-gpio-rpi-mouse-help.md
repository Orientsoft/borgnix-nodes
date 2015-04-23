Raspberry Pi mouse button node. Generates a **msg.payload** with either a 1 or 0 when the selected mouse button is pressed and released

Also sets **msg.button** to the code value, 1 = left, 2 = right, 4 = middle, so you can work out which button or combination was pressed.

And sets **msg.topic** to _pi/mouse_.