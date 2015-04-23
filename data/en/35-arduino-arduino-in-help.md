Arduino input node. Connects to local Arduino and monitors the selected pin for changes. Uses [_Firmata_.](http://firmata.org/)

The Arduino must be loaded with the Standard Firmata sketch available in the Arduino examples.

You can select either Digital or Analogue input. Outputs the value read as **msg.payload** and the pin number as **msg.topic**.

It only outputs on a change of value - fine for digital inputs, but you can get a lot of data from analogue pins which you must then handle.

You can set the sample rate in ms from 20 to 65535.