import { Builder, Character } from './Builder';

class HeroBuilder implements Builder {
    private hero: Character;

    constructor() {
        this.hero = new Character();
    }

    setHeight(height: number): this {
        this.hero.height = height;
        return this;
    }

    setBuild(build: string): this {
        this.hero.build = build;
        return this;
    }

    setHairColor(hairColor: string): this {
        this.hero.hairColor = hairColor;
        return this;
    }

    setEyeColor(eyeColor: string): this {
        this.hero.eyeColor = eyeColor;
        return this;
    }

    setClothing(clothing: string): this {
        this.hero.clothing = clothing;
        return this;
    }

    setInventory(inventory: string[]): this {
        this.hero.inventory = inventory;
        return this;
    }

    addGoodDeed(deed: string): this {
        this.hero.deeds.push(deed);
        return this;
    }

    getResult(): Character {
        return this.hero;
    }
}

export default HeroBuilder;
