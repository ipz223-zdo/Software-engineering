export class Zoo {
    animals = [];
    employees = [];
    foodInventory = [];
    enclosures = [];
    addAnimal(animal) {
        this.animals.push(animal);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    addFood(food) {
        this.foodInventory.push(food);
    }
    addEnclosure(enclosure) {
        this.enclosures.push(enclosure);
    }
    inventory() {
        this.displayAnimals();
        this.displayEmployees();
        this.displayFood();
        this.displayEnclosures();
    }
    displayAnimals() {
        console.log("Animals:");
        this.animals.forEach(animal => console.log(`ID: ${animal.id}, Name: ${animal.name}, Species: ${animal.species}`));
    }
    displayEmployees() {
        console.log("Employees:");
        this.employees.forEach(employee => console.log(`ID: ${employee.id}, Name: ${employee.name}, Position: ${employee.position}`));
    }
    displayFood() {
        console.log("Food Inventory:");
        this.foodInventory.forEach(food => console.log(`ID: ${food.id}, Name: ${food.name}, Quantity: ${food.quantity}`));
    }
    displayEnclosures() {
        console.log("Enclosures:");
        this.enclosures.forEach(enclosure => console.log(`ID: ${enclosure.id}, Type: ${enclosure.type}, Size: ${enclosure.size}`));
    }
}
//# sourceMappingURL=Zoo.js.map