import { Animal } from './classes/Animal';
import { Employee } from './classes/Employee';
import { Food } from './classes/Food';
import { Enclosure } from './classes/Enclosure';
import { Zoo } from './classes/Zoo';

const zoo = new Zoo();

// Animals
const lion = new Animal(1, "Leo", "Lion");
const zebra = new Animal(2, "Zara", "Zebra");
zoo.addAnimal(lion);
zoo.addAnimal(zebra);

// Employees
const keeper = new Employee(1, "John Doe", "Keeper");
const vet = new Employee(2, "Jane Smith", "Veterinarian");
zoo.addEmployee(keeper);
zoo.addEmployee(vet);

// Food
const meat = new Food(1, "Meat", 50);
const grass = new Food(2, "Grass", 100);
zoo.addFood(meat);
zoo.addFood(grass);

// Enclosures
const lionEnclosure = new Enclosure(1, "Carnivore", "Large");
const herbivoreEnclosure = new Enclosure(2, "Herbivore", "Medium");
zoo.addEnclosure(lionEnclosure);
zoo.addEnclosure(herbivoreEnclosure);

// Display Inventory
zoo.inventory();
