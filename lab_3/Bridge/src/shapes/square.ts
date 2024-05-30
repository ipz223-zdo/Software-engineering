import { Shape } from "./shape";
import { Renderer } from "../renderers/renderer";

export class Square extends Shape {
    constructor(renderer: Renderer) {
        super(renderer);
    }

    draw(): void {
        this.renderer.renderSquare();
    }
}
