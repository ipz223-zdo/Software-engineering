import { Hero } from "./hero";

export class Mage extends Hero {
    description = "Mage";

    attack() {
        console.log("Mage casts a spell.");
    }
}