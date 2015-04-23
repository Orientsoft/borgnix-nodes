根据提供的模板创建新的消息

_[格式详见这里](http://mustache.github.io/mustache.5.html)_

例如当一个模板:

<pre>Hello {{name}}. Today is {{date}}</pre>

收到一个消息包含:

<pre>{
  name: "Fred",
  date: "Monday"
  payload: ...
}</pre>

结果的消息就是:

<pre>Hello Fred. Today is Monday</pre>