A function that parses the **msg.payload** to convert csv to/from a javascript object. Places the result in the payload.

If the input is a string it tries to parse it as CSV and creates a javascript object.

If the input is a javascript object it tries to build a CSV string.

The columns template should contain an ordered list of column headers. For csv input these become the property names. For csv output these specify the properties to extract from the object and the order for the csv.

**Note:** the columns should always be specified comma separated - even if another separator is chosen for the data.