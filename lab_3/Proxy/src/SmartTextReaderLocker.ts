import { SmartTextReader } from './SmartTextReader';
class SmartTextReaderLocker {
    private readonly realObject: SmartTextReader;
    private regex: RegExp;

    constructor(realObject: SmartTextReader, regex: string) {
        this.realObject = realObject;
        this.regex = new RegExp(regex);
    }

    readText(): string[][] | null {
        if (this.regex.test(this.realObject['filePath'])) {
            console.log("Access denied!");
            return null;
        } else {
            return this.realObject.readText();
        }
    }
}
export { SmartTextReaderLocker };
