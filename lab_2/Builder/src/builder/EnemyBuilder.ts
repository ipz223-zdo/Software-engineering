import { Builder, Character } from './Builder';

class EnemyBuilder implements Builder {
    private enemy: Character;

    constructor() {
        this.enemy = new Character();
    }

    setHeight(height: number): this {
        this.enemy.height = height;
        return this;
    }

    setBuild(build: string): this {
        this.enemy.build = build;
        return this;
    }

    setHairColor(hairColor: string): this {
        this.enemy.hairColor = hairColor;
        return this;
    }

    setEyeColor(eyeColor: string): this {
        this.enemy.eyeColor = eyeColor;
        return this;
    }

    setClothing(clothing: string): this {
        this.enemy.clothing = clothing;
        return this;
    }

    setInventory(inventory: string[]): this {
        this.enemy.inventory = inventory;
        return this;
    }

    addEvilDeed(deed: string): this {
        this.enemy.deeds.push(deed);
        return this;
    }

    getResult(): Character {
        return this.enemy;
    }
}

export default EnemyBuilder;
