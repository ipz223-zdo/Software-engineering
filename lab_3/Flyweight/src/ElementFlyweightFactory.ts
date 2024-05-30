import { LightElementNode } from "./LightElementNode";

export class ElementFlyweightFactory {
    public static elements: Map<string, LightElementNode> = new Map();

    static getElement(tagName: string, closingType: string): LightElementNode {
        const key = `${tagName}-${closingType}}`;
        if (!this.elements.has(key)) {
            const element = new LightElementNode(tagName, closingType);
            this.elements.set(key, element);
            return element;
        }
        return this.elements.get(key)!;
    }
}