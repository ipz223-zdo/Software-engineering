import { Logger } from './Logger';
import { FileWriter } from './FileWriter';

export class FileLoggerAdapter extends Logger {
    private fileWriter: FileWriter;

    constructor(fileWriter: FileWriter) {
        super();
        this.fileWriter = fileWriter;
    }

    log(message: string) {
        this.fileWriter.write(message);
    }

    error(message: string) {
        this.fileWriter.writeLine(`ERROR: ${message}`);
    }

    warn(message: string) {
        this.fileWriter.writeLine(`WARN: ${message}`);
    }
}
