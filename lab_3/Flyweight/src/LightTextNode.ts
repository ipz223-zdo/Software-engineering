import { LightNode } from "./LightNode";

export class LightTextNode extends LightNode {
    private text: string;

    constructor(text: string) {
        super();
        this.text = text;
    }

    render(): string {
        return this.text;
    }
}
