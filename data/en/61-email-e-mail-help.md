Sends the **msg.payload** as an email, with a subject of **msg.topic**.

The default message recipient can be configured in the node, if it is left blank it should be set using the **msg.to** property of the incoming message.

The payload can be html format.

If the payload is a binary buffer then it will be converted to an attachment. The filename should be set using **msg.filename**. Optionally **msg.description** can be added for the body text.

Alternatively you may provide **msg.attachments** which should contain an array of one or more attachments in [nodemailer](https://www.npmjs.com/package/nodemailer#attachments) format.