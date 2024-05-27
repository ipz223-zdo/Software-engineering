## Class diagram

![Class_diagram](diagram.svg)

## I used the following principles in my code

1. #### DRY (Don't Repeat Yourself):

   In my code, I avoided repetition by using interfaces and classes for different objects in the zoo.

2. #### KISS (Keep It Simple, Stupid):

   My code has a simple structure and is easy to understand. I use simple classes and interfaces to model the zoo objects.

3. #### SOLID:
    - Single Responsibility Principle: Each class in my code has one specific responsibility. For example, the Zoo class is responsible for managing the zoo, and the Animal, Employee, Food, and Enclosure classes are responsible for specific objects.
    - Open/Closed Principle: My code is easily extensible without changing the existing code.
    - Liskov Substitution Principle: I use interfaces in such a way that objects of different classes that implement the same interface can be interchanged. For example, all the animals in the zoo implement the IAnimal interface, so I can add any animal to the zoo without changing the code.
    - Interface Segregation Principle: I create interfaces in such a way that classes implement only those methods that are necessary for their functionality. For example, the IAnimal interface contains only methods related to animals.

4. #### YAGNI (You Ain't Gonna Need It):

   My code demonstrates the YAGNI principle because I don't add unnecessary functionality or extra classes without a real need. I add only the functionality that is necessary to fulfil the requirements.

5. #### Composition Over Inheritance:

   I use composition when I create a zoo. Instead of inheriting functionality from other classes, I create class objects and use them in the zoo.

Translated with Google Translate)