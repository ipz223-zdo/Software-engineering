import { LightElementNode } from "./LightElementNode";
import { LightTextNode } from "./LightTextNode";
import { ElementFlyweightFactory } from "./ElementFlyweightFactory";
import * as fs from 'fs';
import { LightNode } from "./LightNode";

const text = fs.readFileSync('text.txt', 'utf-8');
const lines = text.split('\n');

const root: LightElementNode[] = [];

if (lines.length > 0) {
    const firstLine = lines[0].trim();
    const h1Node = ElementFlyweightFactory.getElement('h1', 'block');
    h1Node.addChild(new LightTextNode(firstLine));
    root.push(h1Node);
}

for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    let newNode: LightElementNode;

    function determineElementType(line: string): string {
        if (line.length < 20) {
            return 'h2';
        } else if (line.startsWith(' ')) {
            return 'blockquote';
        } else {
            return 'p';
        }
    }

    const elementType = determineElementType(line);

    newNode = ElementFlyweightFactory.getElement(elementType, 'block');

    if (line.trim() !== '') {
        newNode.addChild(new LightTextNode(line.trim()));
    }

    if (i === 1 || lines[i - 1].trim() === '') {
        root.push(newNode);
    }
}

function calculateTreeSize(nodes: LightNode[]): number {
    let size = 0;
    for (const node of nodes) {
        if (node instanceof LightTextNode) {
            size += node.render().length;
        } else if (node instanceof LightElementNode) {
            size += 2 + node.tagName.length;
            size += calculateTreeSize(node.children);
        }
    }
    return size;
}

const treeSize = calculateTreeSize(root);

const flyweightSize = 100;
const numFlyweightElements = root.length;
const treeSizeWithFlyweight = treeSize + numFlyweightElements * flyweightSize;
const treeSizeWithoutFlyweight = treeSize;

const treeSizeKB = treeSize / 1024;
const treeSizeMB = treeSize / (1024 * 1024);

const treeSizeWithFlyweightKB = treeSizeWithFlyweight / 1024;
const treeSizeWithFlyweightMB = treeSizeWithFlyweight / (1024 * 1024);

console.log(`If not using flyweight, the weight is: ${treeSizeWithFlyweight} characters (${treeSizeWithFlyweight} bytes, ${treeSizeWithFlyweightKB.toFixed(2)} KB, ${treeSizeWithFlyweightMB.toFixed(2)} MB)`);
console.log(`If using flyweight, the weight is : ${treeSizeWithoutFlyweight} characters (${treeSizeWithoutFlyweight} bytes, ${treeSizeKB.toFixed(2)} KB, ${treeSizeMB.toFixed(2)} MB)`);

// If not using flyweight, the weight is: 26636171 characters (26636171 bytes, 26011.89 KB, 25.40 MB)
// If using flyweight, the weight is : 26515671 characters (26515671 bytes, 25894.21 KB, 25.29 MB)