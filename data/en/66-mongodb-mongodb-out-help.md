A simple MongoDB output node. Can save, insert, update and remove objects from a chosen collection.

Save will update an existing object or insert a new object if one does not already exist.

Insert will insert a new object.

Save and insert either store **msg** or **msg.payload**.

Update will modify an existing object or objects. The query to select objects to update uses **msg.query** and the update to the element uses **msg.payload**.

Update can add a object if it does not exist or update multiple objects.

Remove will remove objects that match the query passed in on **msg.payload**. A blank query will delete _all of the objects_ in the collection.

You can either set the collection method in the node config or on **msg.collection**. Setting it in the node will override **msg.collection**.

By default MongoDB creates an __id_ property as the primary key - so repeated injections of the same **msg** will result in many database entries.

If this is NOT the desired behaviour - ie. you want repeated entries to overwrite, then you must set the **msg._id** property to be a constant by the use of a previous function node.

This could be a unique constant or you could create one based on some other msg property.

Currently we do not limit or cap the collection size at all... this may well change.