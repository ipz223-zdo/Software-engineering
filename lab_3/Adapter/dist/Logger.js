export class Logger {
    log(message) {
        console.log(`%c${message}`, 'color: green');
        // this.appendToOutput('log', message);
    }
    error(message) {
        console.log(`%c${message}`, 'color: red');
        // this.appendToOutput('error', message);
    }
    warn(message) {
        console.log(`%c${message}`, 'color: orange');
        // this.appendToOutput('warn', message);
    }
}
//# sourceMappingURL=Logger.js.map