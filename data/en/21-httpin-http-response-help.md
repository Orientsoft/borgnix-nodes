Sends responses back to http requests received from an HTTP Input node.

The response can be customised using the following message properties:

*   `payload` is sent as the body of the response
*   `statusCode`, if set, is used as the response status code (default: 200)
*   `headers`, if set, should be an object containing field/value pairs to be added as response headers.