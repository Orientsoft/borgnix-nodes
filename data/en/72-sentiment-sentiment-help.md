Analyses the **msg.payload** and adds a **msg.sentiment** object that contains the resulting AFINN-111 sentiment score as **msg.sentiment.score**.

A score greater than zero is positive and less than zero is negative.

The score typically ranges from -5 to +5, but can go higher and lower.

An object of word score overrides can be supplied as **msg.overrides**.

See [the Sentiment docs here](https://github.com/thisandagain/sentiment/blob/master/README.md).