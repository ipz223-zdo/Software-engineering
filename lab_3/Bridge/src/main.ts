import { Circle } from "./shapes/circle";
import { Square } from "./shapes/square";
import { Triangle } from "./shapes/triangle";
import { VectorRenderer } from "./renderers/vectorRenderer";
import { RasterRenderer } from "./renderers/rasterRenderer";

function main() {
    const vectorRenderer = new VectorRenderer();
    const rasterRenderer = new RasterRenderer();

    const circle1 = new Circle(vectorRenderer);
    const square1 = new Square(vectorRenderer);
    const triangle1 = new Triangle(vectorRenderer);

    circle1.draw();
    square1.draw();
    triangle1.draw();

    const circle2 = new Circle(rasterRenderer);
    const square2 = new Square(rasterRenderer);
    const triangle2 = new Triangle(rasterRenderer);

    circle2.draw();
    square2.draw();
    triangle2.draw();
}

main();
