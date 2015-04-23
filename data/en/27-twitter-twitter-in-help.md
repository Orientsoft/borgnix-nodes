Twitter input node. Can be used to search either:

*   the public or a user's stream for tweets containing the configured search term
*   all tweets by specific users
*   direct messages received by the authenticated user

Use space for _and_ and comma , for _or_ when searching for multiple terms.

Sets the **msg.topic** to _tweets/_ and then appends the senders screen name.

Sets **msg.location** to the tweeters location if known.

Sets **msg.tweet** to the full tweet object as documented by [Twitter](https://dev.twitter.com/docs/platform-objects/tweets).

**Note:** when set to a specific user's tweets, or your direct messages, the node is subject to Twitter's API rate limiting. If you deploy the flows multiple times within a 15 minute window, you may exceed the limit and will see errors from the node. These errors will clear when the current 15 minute window passes.