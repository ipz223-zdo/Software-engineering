import { SmartTextReader } from './SmartTextReader';
class SmartTextChecker {
    private readonly realObject: SmartTextReader;

    constructor(realObject: SmartTextReader) {
        this.realObject = realObject;
    }

    readText(): string[][] | null {
        console.log(`Opening file: ${this.realObject['filePath']}`);
        const result = this.realObject.readText();
        if (result) {
            console.log(`Read successfully from file '${this.realObject['filePath']}'`);
            console.log(`Total lines: ${result.length}`);
            const totalChars = result.reduce((acc: any, line: any) => acc + line.length, 0);

            console.log(`Total characters: ${totalChars}`);
        } else {
            console.log("Failed to read from file.");
        }
        return result;
    }
}
export { SmartTextChecker };
