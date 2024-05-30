import { Renderer } from "../renderers/renderer";

export abstract class Shape {
    protected constructor(protected renderer: Renderer) {}

    abstract draw(): void;
}
