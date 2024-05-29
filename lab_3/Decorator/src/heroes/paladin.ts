import { Hero } from "./hero";

export class Paladin extends Hero {
    description = "Paladin";

    attack() {
        console.log("Paladin smites with holy light.");
    }
}