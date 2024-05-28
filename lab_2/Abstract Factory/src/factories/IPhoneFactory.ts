import { DeviceFactory } from "./DeviceFactory";
import { Laptop } from "../devices/Laptop";
import { Netbook } from "../devices/Netbook";
import { EBook } from "../devices/EBook";
import { Smartphone } from "../devices/Smartphone";

export class IPhoneFactory extends DeviceFactory {
    createLaptop() {
        return new Laptop();
    }
    createNetbook() {
        return new Netbook();
    }
    createEBook() {
        return new EBook();
    }
    createSmartphone() {
        return new Smartphone();
    }
}
