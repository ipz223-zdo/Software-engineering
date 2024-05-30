import * as fs from 'fs';

class SmartTextReader {
    private readonly filePath: string;

    constructor(filePath: string) {
        this.filePath = filePath;
    }

    readText(): string[][] | null {
        try {
            const fileContent = fs.readFileSync(this.filePath, 'utf-8');
            const lines = fileContent.split('\n');
            return lines.map((line: string) => line.trim().split(''));
        } catch (error) {
            console.error(`Error reading file '${this.filePath}': ${error}`);
            return null;
        }
    }
}

export { SmartTextReader };

