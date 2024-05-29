import { InventoryDecorator } from "./inventoryDecorator";

export class ArtefactDecorator extends InventoryDecorator {
    equip() {
        console.log(`${this.hero.description} is equipped with an artefact.`);
    }
}