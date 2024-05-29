export class Logger {
    log(message: string) {
        console.log(`%c${message}`, 'color: green');
    }

    error(message: string) {
        console.log(`%c${message}`, 'color: red');
    }

    warn(message: string) {
        console.log(`%c${message}`, 'color: orange');
    }
}
