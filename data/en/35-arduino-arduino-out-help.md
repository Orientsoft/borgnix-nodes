Arduino output node. Connects to local Arduino and writes to the selected digital pin. Uses [_Firmata_.](http://firmata.org/)

The Arduino must be loaded with the Standard Firmata sketch available in the Arduino examples.

You can select Digital, Analogue (PWM) or Servo type outputs. Expects a numeric value in **msg.payload**. The pin number is set in the properties panel.