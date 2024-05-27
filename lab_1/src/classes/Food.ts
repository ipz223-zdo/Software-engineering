import { IFood } from '../interfaces/IFood';

export class Food implements IFood {
    constructor(public id: number, public name: string, public quantity: number) {}
}