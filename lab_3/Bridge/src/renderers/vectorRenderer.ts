import { Renderer } from "./renderer";

export class VectorRenderer implements Renderer {
    renderCircle(): void {
        console.log("Drawing Circle as vector.");
    }

    renderSquare(): void {
        console.log("Drawing Square as vector.");
    }

    renderTriangle(): void {
        console.log("Drawing Triangle as vector.");
    }
}
