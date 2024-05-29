import { Hero } from "../heroes/hero";
import { Inventory } from "./inventory";

export abstract class InventoryDecorator implements Inventory {
    constructor(protected hero: Hero) {}

    abstract equip(): void;
}
