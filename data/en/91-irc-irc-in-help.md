Connects to a channel on an IRC server.

You may join multiple channels by comma separating a list - #chan1,#chan2,#etc.

Any messages on that channel will appear on the `msg.payload` at the output, while `msg.topic` will contain who it is from. `msg.to` contains either the name of the channel or PRIV in the case of a pm.

The second output provides a `msg.payload` that has any status messages such as joins, parts, kicks etc.

The type of the status message is set as `msg.payload.type`.

The possible status types are:  

<table border="1" cellpadding="1" cellspacing="1">
<thead>
<tr>
<th scope="col">Type</th>

<th scope="col">Description</th>

</tr>

</thead>

<tbody>
<tr>
<td>message</td>

<td>message is sent into the channel</td>

</tr>

<tr>
<td>pm</td>

<td>private message to the bot</td>

</tr>

<tr>
<td>join</td>

<td>a user joined the channel (also triggered when the bot joins a channel)</td>

</tr>

<tr>
<td>invite</td>

<td>the bot is being invited to a channel</td>

</tr>

<tr>
<td>part</td>

<td>a user leaves a channel</td>

</tr>

<tr>
<td>quit</td>

<td>a user quits a channel</td>

</tr>

<tr>
<td>kick</td>

<td>a user is kicked from a channel</td>

</tr>

<tr>
<td>names</td>

<td>retrieves the list of users when the bot joins a channel</td>

</tr>

</tbody>

</table>