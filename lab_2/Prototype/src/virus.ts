class Virus {
    weight: number;
    age: number;
    name: string;
    species: string;
    children: Virus[];

    constructor(weight: number, age: number, name: string, species: string) {
        this.weight = weight;
        this.age = age;
        this.name = name;
        this.species = species;
        this.children = [];
    }

    addChild(child: Virus): void {
        this.children.push(child);
    }

    clone(): Virus {
        const clonedVirus = new Virus(this.weight, this.age, this.name, this.species);
        this.children.forEach(child => {
            clonedVirus.addChild(child.clone());
        });
        return clonedVirus;
    }

    printFamily(indent: string = ''): void {
        console.log(`${indent}${this.name} (${this.species}) - Weight: ${this.weight}, Age: ${this.age}`);
        this.children.forEach(child => child.printFamily(indent + '  '));
    }
}

export default Virus;
