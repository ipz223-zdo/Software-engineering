import { InventoryDecorator } from "./inventoryDecorator";

export class ArmorDecorator extends InventoryDecorator {
    equip() {
        console.log(`${this.hero.description} is equipped with armor.`);
    }
}