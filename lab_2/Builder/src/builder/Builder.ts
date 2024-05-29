interface Builder {
    setHeight(height: number): this;
    setBuild(build: string): this;
    setHairColor(hairColor: string): this;
    setEyeColor(eyeColor: string): this;
    setClothing(clothing: string): this;
    setInventory(inventory: string[]): this;
    getResult(): Character;
}

class Character {
    height: number | null = null;
    build: string | null = null;
    hairColor: string | null = null;
    eyeColor: string | null = null;
    clothing: string | null = null;
    inventory: string[] = [];
    deeds: string[] = [];

    constructor() {
        this.inventory = [];
        this.deeds = [];
    }

    describe(): void {
        console.log(`Character:
  Height: ${this.height}
  Build: ${this.build}
  Hair Color: ${this.hairColor}
  Eye Color: ${this.eyeColor}
  Clothing: ${this.clothing}
  Inventory: ${this.inventory.join(', ')}
  Deeds: ${this.deeds.join(', ')}`);
    }
}

export { Builder, Character };
