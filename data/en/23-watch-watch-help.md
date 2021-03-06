Watches a directory or file for changes.

You can enter a list of comma separated directories and/or files. You will need to put quotes "..." around any that have spaces in.

On Windows you must use double back-slashes \\ in any directory names.

The full filename of the file that actually changed is put into **msg.payload**, while a stringified version of the watch list is returned in **msg.topic**.

**msg.file** contains just the short filename of the file that changed. **msg.type** has the type of thing changed, usually _file_ or _directory_, while **msg.size** holds the file size in bytes.

Of course in Linux, _everything_ is a file and thus can be watched...

**Note:** The directory or file must exist in order to be watched. If the file or directory gets deleted it may no longer be monitored even if it gets re-created.