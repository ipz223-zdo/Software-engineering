import { Hero } from "./hero";

export class Warrior extends Hero {
    description = "Warrior";

    attack() {
        console.log("Warrior attacks with a sword.");
    }
}