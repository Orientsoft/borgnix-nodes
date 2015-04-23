Calls a MongoDB collection method based on the selected operator.

Find queries a collection using the **msg.payload** as the query statement as per the .find() function. Optionally, you may also (via a function) set a **msg.projection** object to constrain the returned fields, a **msg.sort** object, a **msg.limit** number and a **msg.skip** number.

Count returns a count of the number of documents in a collection or matching a query using the **msg.payload** as the query statement.

Aggregate provides access to the aggregation pipeline using the **msg.payload** as the pipeline array.

You can either set the collection method in the node config or on **msg.collection**. Setting it in the node will override **msg.collection**.

See the [_MongoDB collection methods docs_](http://docs.mongodb.org/manual/reference/method/db.collection.find/) for examples.

The result is returned in **msg.payload**.