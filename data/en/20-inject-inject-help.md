Pressing the button on the left side of the node allows a message on a topic to be injected into the flow. This is mainly for test purposes.

The payload defaults to the current time in millisecs since 1970, but can also be set to a String or left blank.

The repeat function allows the payload to be sent on the required schedule.

The Fire once at start option actually waits a short interval before firing to give other nodes a chance to instantiate properly.

**Note:** "Interval between times" and "at a specific time" uses cron. This means that 20 minutes will be at the next hour, 20 minutes past and 40 minutes past - not in 20 minutes time. If you want every 20 minutes from now - use the "interval" option.