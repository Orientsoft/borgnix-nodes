Borgnix-translation
=============

Translation project for [node-red][1] nodes used by [Borgnix][2].

Install
--------
from your console, run:
```
npm i borgnix-translation
```
It is recommended to install the module under your Node-RED for easy use.

Usage
-----

### Extract
To extract help info and tips form your node-red nodes, run:
```
node borgnix-translation extract PATH_TO_NODES_DIRECTORY LANGUAGE
```

This will extract all help and tips from all nodes under the PATH_TO_NODES_DIRECTORY LANGUAGE folder, and convert the HTML content to  Markdown for easy editting and preview.
If you install the module under your Node-RED directory, simply run
```
node borgnix-translation extract
```
Extracted Markdown files will be stored at `data/LANGUAGE`, LANGUAGE is ***en*** by default.

### Update

After you extract the help and tips from the nodes, you can copy all the Markdown files to `data/YOUR_LANGUAGE`, and do all the translation.
When you're done translating, you can apply those changes to Node-RED by running:
```
node borgnix-translation update YOUR_LANGUAGE PATH_TO_NODES_DIRECTORY
```


[1]: http://nodered.org/
[2]: http://z.borgnix.com/