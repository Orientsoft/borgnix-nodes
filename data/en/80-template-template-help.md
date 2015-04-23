Creates a new message based on the provided template.

This uses the _[mustache](http://mustache.github.io/mustache.5.html)_ format.

For example, when a template of:

<pre>Hello {{name}}. Today is {{date}}</pre>

receives a message containing:

<pre>{
  name: "Fred",
  date: "Monday"
  payload: ...
}</pre>

The resulting payload will be:

<pre>Hello Fred. Today is Monday</pre>