export class Animal {
    id;
    name;
    species;
    constructor(id, name, species) {
        this.id = id;
        this.name = name;
        this.species = species;
    }
    feed() {
        console.log(`${this.name} the ${this.species} has been fed.`);
    }
}
//# sourceMappingURL=Animal.js.map