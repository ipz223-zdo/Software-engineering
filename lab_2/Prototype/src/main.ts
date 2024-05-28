import Virus from './virus';

// Create initial virus
const parentVirus = new Virus(1.5, 2, 'ParentVirus', 'TypeA');

// Create children viruses
const childVirus1 = new Virus(0.8, 1, 'ChildVirus1', 'TypeA');
const childVirus2 = new Virus(0.9, 1, 'ChildVirus2', 'TypeA');

// Add children to parent
parentVirus.addChild(childVirus1);
parentVirus.addChild(childVirus2);

// Create grandchildren viruses
const grandChildVirus1 = new Virus(0.4, 0.5, 'GrandChildVirus1', 'TypeA');
const grandChildVirus2 = new Virus(0.5, 0.5, 'GrandChildVirus2', 'TypeA');

// Add grandchildren to child
childVirus1.addChild(grandChildVirus1);
childVirus2.addChild(grandChildVirus2);

// Clone the parent virus
const clonedVirus = parentVirus.clone();

// Print the original and cloned virus families
console.log("Original Virus Family:");
parentVirus.printFamily();

console.log("\nCloned Virus Family:");
clonedVirus.printFamily();
