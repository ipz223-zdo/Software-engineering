import { Inventory } from "../inventory/inventory";
import {InventoryDecorator} from "../inventory/inventoryDecorator";

export abstract class Hero {
    abstract description: string;
    inventories: Inventory[] = [];

    addInventory(inventory: Inventory) {
        this.inventories.push(inventory);
    }

    addDecorator(decorator: InventoryDecorator) {
        this.inventories.push(decorator);
    }

    abstract attack(): void;
}
