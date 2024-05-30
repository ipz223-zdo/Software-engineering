import { Renderer } from "./renderer";

export class RasterRenderer implements Renderer {
    renderCircle(): void {
        console.log("Drawing Circle as pixels.");
    }

    renderSquare(): void {
        console.log("Drawing Square as pixels.");
    }

    renderTriangle(): void {
        console.log("Drawing Triangle as pixels.");
    }
}
