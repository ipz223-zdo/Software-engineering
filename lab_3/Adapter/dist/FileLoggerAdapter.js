import { Logger } from './Logger';
export class FileLoggerAdapter extends Logger {
    fileWriter;
    constructor(fileWriter) {
        super();
        this.fileWriter = fileWriter;
    }
    log(message) {
        this.fileWriter.write(message);
    }
    error(message) {
        this.fileWriter.writeLine(`ERROR: ${message}`);
    }
    warn(message) {
        this.fileWriter.writeLine(`WARN: ${message}`);
    }
}
//# sourceMappingURL=FileLoggerAdapter.js.map