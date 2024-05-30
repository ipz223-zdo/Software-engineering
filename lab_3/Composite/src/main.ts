import { LightElementNode } from "./LightElementNode";
import { LightTextNode } from "./LightTextNode";

// Creating elements
const paragraph = new LightElementNode('p', 'block', 'normal', ['paragraph']);
const heading = new LightElementNode('h1', 'block', 'normal', ['heading']);
const span = new LightElementNode('span', 'inline', 'normal', ['highlight']);

// Adding text to elements
paragraph.addChild(new LightTextNode('This is a paragraph.'));
heading.addChild(new LightTextNode('Welcome to LightHTML!'));
span.addChild(new LightTextNode('Highlighted text.'));

// Adding child elements
paragraph.addChild(span);

// Rendering the page to console
console.log(heading.render());
console.log(paragraph.render());

// Creating elements for a list
const list = new LightElementNode('ul', 'block', 'normal', ['list']);
const listItem1 = new LightElementNode('li', 'block', 'normal', ['list-item']);
const listItem2 = new LightElementNode('li', 'block', 'normal', ['list-item']);

// Adding text to list elements
listItem1.addChild(new LightTextNode('List item 1'));
listItem2.addChild(new LightTextNode('List item 2'));

// Adding list elements to the list
list.addChild(listItem1);
list.addChild(listItem2);

// Creating elements for a table
const table = new LightElementNode('table', 'block', 'normal', ['table']);
const tableRow1 = new LightElementNode('tr', 'block', 'normal', ['table-row']);
const tableRow2 = new LightElementNode('tr', 'block', 'normal', ['table-row']);
const tableRow3 = new LightElementNode('tr', 'block', 'normal', ['table-row']);
const tableHeader1 = new LightElementNode('th', 'block', 'normal', ['table-header']);
const tableHeader2 = new LightElementNode('th', 'block', 'normal', ['table-header']);
const tableData1 = new LightElementNode('td', 'block', 'normal', ['table-data']);
const tableData2 = new LightElementNode('td', 'block', 'normal', ['table-data']);
const tableData3 = new LightElementNode('td', 'block', 'normal', ['table-data']);
const tableData4 = new LightElementNode('td', 'block', 'normal', ['table-data']);

// Adding text to table headers
tableHeader1.addChild(new LightTextNode('Header 1'));
tableHeader2.addChild(new LightTextNode('Header 2'));

// Adding text to table cells
tableData1.addChild(new LightTextNode('Data 1'));
tableData2.addChild(new LightTextNode('Data 2'));
tableData3.addChild(new LightTextNode('Data 3'));
tableData4.addChild(new LightTextNode('Data 4'));

// Adding headers and cells to table rows
tableRow1.addChild(tableHeader1);
tableRow1.addChild(tableHeader2);
tableRow2.addChild(tableData1);
tableRow2.addChild(tableData2);
tableRow3.addChild(tableData3);
tableRow3.addChild(tableData4);

// Adding rows to the table
table.addChild(tableRow1);
table.addChild(tableRow2);
table.addChild(tableRow3);

// Rendering the list and table to console
console.log(list.render());
console.log(table.render());
