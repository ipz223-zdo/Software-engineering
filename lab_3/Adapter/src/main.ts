import { FileWriter } from './FileWriter';
import { FileLoggerAdapter } from './FileLoggerAdapter';
import {Logger} from "./Logger";

function main() {
    const logger = new Logger();
    const fileWriter = new FileWriter();
    const fileLogger = new FileLoggerAdapter(fileWriter);

    logger.log("This is a 'log' message(Logger).");
    logger.error("This is an 'error' message(Logger).");
    logger.warn("This is a 'warning' message(Logger).");

    fileWriter.writeLine("This is 'writeLine' message(fileWriter)")
    fileWriter.write("This is 'write' message(fileWriter)")

    fileLogger.log("This is a 'log' message(fileLoggerAdapter).");
    fileLogger.error("This is an 'error' message(fileLoggerAdapter)");
    fileLogger.warn("This is a 'warning' message(fileLoggerAdapter)");

}

main();



