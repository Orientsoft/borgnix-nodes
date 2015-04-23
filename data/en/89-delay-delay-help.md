Introduces a delay into a flow or rate limits messages.

Default delay is 5 seconds and rate limit of 1 msg/second, but both can be configured.

If you select a rate limit you may optionally discard any intermediate messages that arrive.

The "topic based fair queue" adds messages to a release queue tagged by their **msg.topic** property. At each "tick", derived from the rate, the next "topic" is released. Any messages arriving on the same topic before release replace those in that position in the queue. So each "topic" gets a turn - but the most recent value is always the one sent.