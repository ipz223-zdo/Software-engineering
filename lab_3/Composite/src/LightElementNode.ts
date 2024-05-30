import { LightNode } from "./LightNode";

export class LightElementNode extends LightNode {
    private tagName: string;
    private displayType: string;
    private closingType: string;
    private classes: string[];
    private children: LightNode[];

    constructor(tagName: string, displayType: string, closingType: string, classes: string[]) {
        super();
        this.tagName = tagName;
        this.displayType = displayType;
        this.closingType = closingType;
        this.classes = classes;
        this.children = [];
    }

    addChild(child: LightNode) {
        this.children.push(child);
    }

    render(): string {
        const classes = this.classes.length > 0 ? ` class="${this.classes.join(' ')}"` : '';
        const openingTag = `<${this.tagName}${classes}>`;
        const closingTag = this.closingType === 'self' ? '' : `</${this.tagName}>`;
        const innerHTML = this.children.map(child => child.render()).join('');
        return `${openingTag}${innerHTML}${closingTag}`;
    }
}