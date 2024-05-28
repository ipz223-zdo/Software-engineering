import { IPhoneFactory } from "./factories/IPhoneFactory";
import { XiaomiFactory } from "./factories/XiaomiFactory";
import { GalaxyFactory } from "./factories/GalaxyFactory";

function main() {
    const iPhoneFactory = new IPhoneFactory();
    const xiaomiFactory = new XiaomiFactory();
    const galaxyFactory = new GalaxyFactory();

    const iPhoneLaptop = iPhoneFactory.createLaptop();
    const iPhoneNetbook = iPhoneFactory.createNetbook();
    const iPhoneEBook = iPhoneFactory.createEBook();
    const iPhoneSmartphone = iPhoneFactory.createSmartphone();

    const xiaomiLaptop = xiaomiFactory.createLaptop();
    const xiaomiNetbook = xiaomiFactory.createNetbook();
    const xiaomiEBook = xiaomiFactory.createEBook();
    const xiaomiSmartphone = xiaomiFactory.createSmartphone();

    const galaxyLaptop = galaxyFactory.createLaptop();
    const galaxyNetbook = galaxyFactory.createNetbook();
    const galaxyEBook = galaxyFactory.createEBook();
    const galaxySmartphone = galaxyFactory.createSmartphone();

    console.log("Devices created by IPhone Factory:");
    iPhoneLaptop.displayInfo();
    iPhoneNetbook.displayInfo();
    iPhoneEBook.displayInfo();
    iPhoneSmartphone.displayInfo();

    console.log("\nDevices created by Xiaomi Factory:");
    xiaomiLaptop.displayInfo();
    xiaomiNetbook.displayInfo();
    xiaomiEBook.displayInfo();
    xiaomiSmartphone.displayInfo();

    console.log("\nDevices created by Galaxy Factory:");
    galaxyLaptop.displayInfo();
    galaxyNetbook.displayInfo();
    galaxyEBook.displayInfo();
    galaxySmartphone.displayInfo();
}
main();
