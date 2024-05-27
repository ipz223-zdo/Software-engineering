import { IAnimal } from '../interfaces/IAnimal';

export class Animal implements IAnimal {
    constructor(public id: number, public name: string, public species: string) {}

    feed(): void {
        console.log(`${this.name} the ${this.species} has been fed.`);
    }
}