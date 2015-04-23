A function that parses the **msg.payload** to convert xml to/from a javascript object. Places the result in the payload.

If the input is a string it tries to parse it as XML and creates a javascript object.

If the input is a javascript object it tries to build an XML string.

See [the xml2js docs _here_](https://github.com/Leonidas-from-XIV/node-xml2js/blob/master/README.md) for more information.