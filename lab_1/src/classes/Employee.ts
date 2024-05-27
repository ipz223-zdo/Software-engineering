import { IEmployee } from '../interfaces/IEmployee';

export class Employee implements IEmployee {
    constructor(public id: number, public name: string, public position: string) {}
}