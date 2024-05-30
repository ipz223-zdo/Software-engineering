import { LightNode } from "./LightNode";

export class LightElementNode extends LightNode {
    public tagName: string;
    protected closingType: string;
    public children: LightNode[];

    constructor(tagName: string, closingType: string) {
        super();
        this.tagName = tagName;
        this.closingType = closingType;
        this.children = [];
    }

    addChild(child: LightNode) {
        if (child !== this) {
            this.children.push(child);
        }
    }

    render(): string {
        const openingTag = `<${this.tagName}>`;
        const closingTag = this.closingType === 'self' ? '' : `</${this.tagName}>`;
        const innerHTML = this.children.map(child => child.render()).join('');
        return `${openingTag}${innerHTML}${closingTag}`;
    }
}
