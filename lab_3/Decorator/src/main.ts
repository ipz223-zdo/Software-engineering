import { Warrior } from "./heroes/warrior";
import { Mage } from "./heroes/mage";
import { Paladin } from "./heroes/paladin";
import { ArmorDecorator } from "./inventory/armorDecorator";
import { WeaponDecorator } from "./inventory/weaponDecorator";
import { ArtefactDecorator } from "./inventory/artefactDecorator";
function main() {
    const warrior = new Warrior();
    const mage = new Mage();
    const paladin = new Paladin();

    warrior.addDecorator(new ArmorDecorator(warrior));

    mage.addDecorator(new WeaponDecorator(mage));
    mage.addDecorator(new ArtefactDecorator(mage));

    paladin.addDecorator(new ArmorDecorator(paladin));
    paladin.addDecorator(new ArtefactDecorator(paladin));

    warrior.inventories.forEach(inventory => inventory.equip());
    warrior.attack();

    mage.inventories.forEach(inventory => inventory.equip());
    mage.attack();

    paladin.inventories.forEach(inventory => inventory.equip());
    paladin.attack();
}

main();