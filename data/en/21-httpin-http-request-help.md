Provides a node for making http requests.

The URL and HTTP method can be configured in the node, if they are left blank they should be set in an incoming message on `msg.url` and `msg.method`:

*   `url`, if set, is used as the url of the request. Must start with http: or https:
*   `method`, if set, is used as the HTTP method of the request. Must be one of `GET`, `PUT`, `POST`, `PATCH` or `DELETE` (default: GET)
*   `headers`, if set, should be an object containing field/value pairs to be added as request headers
*   `payload` is sent as the body of the request

When configured within the node, the URL property can contain [mustache-style](http://mustache.github.io/mustache.5.html) tags. These allow the url to be constructed using values of the incoming message. For example, if the url is set to `example.com/{{{topic}}}`, it will have the value of `msg.topic` automatically inserted. Using {{{...}}} prevents mustache from escaping characters like / & etc.

The output message contains the following properties:

*   `payload` is the body of the response
*   `statusCode` is the status code of the response, or the error code if the request could not be completed
*   `headers` is an object containing the response headers