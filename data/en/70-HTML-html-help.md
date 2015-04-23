Extracts elements from an html document held in **msg.payload** using a selector.

The selector uses [Cheerio](="https://github.com/cheeriojs/cheerio/blob/master/Readme.md") which uses the [CSS selector](https://github.com/fb55/CSSselect#user-content-supported-selectors) syntax.

The result can be either a single message with a payload containing an array of the matched elements, or multiple messages that each contain a matched element.