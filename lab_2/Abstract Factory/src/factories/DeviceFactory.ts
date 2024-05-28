import { Device } from "../devices/Device";

export abstract class DeviceFactory {
    abstract createLaptop(): Device;
    abstract createNetbook(): Device;
    abstract createEBook(): Device;
    abstract createSmartphone(): Device;
}
