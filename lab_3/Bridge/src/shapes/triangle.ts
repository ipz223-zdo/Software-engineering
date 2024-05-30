import { Shape } from "./shape";
import { Renderer } from "../renderers/renderer";

export class Triangle extends Shape {
    constructor(renderer: Renderer) {
        super(renderer);
    }

    draw(): void {
        this.renderer.renderTriangle();
    }
}
