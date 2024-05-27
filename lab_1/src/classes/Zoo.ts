import { IAnimal } from '../interfaces/IAnimal';
import { IEmployee } from '../interfaces/IEmployee';
import { IFood } from '../interfaces/IFood';
import { Enclosure } from './Enclosure';

export class Zoo {
    private animals: IAnimal[] = [];
    private employees: IEmployee[] = [];
    private foodInventory: IFood[] = [];
    private enclosures: Enclosure[] = [];

    addAnimal(animal: IAnimal): void {
        this.animals.push(animal);
    }

    addEmployee(employee: IEmployee): void {
        this.employees.push(employee);
    }

    addFood(food: IFood): void {
        this.foodInventory.push(food);
    }

    addEnclosure(enclosure: Enclosure): void {
        this.enclosures.push(enclosure);
    }

    inventory(): void {
        this.displayAnimals();
        this.displayEmployees();
        this.displayFood();
        this.displayEnclosures();
    }

    private displayAnimals(): void {
        console.log("Animals:");
        this.animals.forEach(animal => console.log(`ID: ${animal.id}, Name: ${animal.name}, Species: ${animal.species}`));
    }

    private displayEmployees(): void {
        console.log("Employees:");
        this.employees.forEach(employee => console.log(`ID: ${employee.id}, Name: ${employee.name}, Position: ${employee.position}`));
    }

    private displayFood(): void {
        console.log("Food Inventory:");
        this.foodInventory.forEach(food => console.log(`ID: ${food.id}, Name: ${food.name}, Quantity: ${food.quantity}`));
    }

    private displayEnclosures(): void {
        console.log("Enclosures:");
        this.enclosures.forEach(enclosure => console.log(`ID: ${enclosure.id}, Type: ${enclosure.type}, Size: ${enclosure.size}`));
    }
}
