Repeatedly gets a **single email** from an IMAP server and forwards on as a msg if not already seen.

The subject is loaded into **msg.topic** and **msg.payload** is the plain text body. If there is text/html then that is returned in **msg.html**. **msg.from** and **msg.date** are also set if you need them.

Uses the imap module.

**Note:** this node _only_ gets the most recent single email from the inbox, so set the repeat (polling) time appropriately.