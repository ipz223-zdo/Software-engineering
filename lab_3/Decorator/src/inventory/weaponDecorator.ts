import { InventoryDecorator } from "./inventoryDecorator";

export class WeaponDecorator extends InventoryDecorator {
    equip() {
        console.log(`${this.hero.description} is equipped with a weapon.`);
    }
}