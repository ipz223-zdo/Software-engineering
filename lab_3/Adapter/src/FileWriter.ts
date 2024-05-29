export class FileWriter {
    write(data: string) {
        this.appendToOutput('log', data);
    }

    writeLine(data: string) {
        this.appendToOutput('log', `${data}\n`);
    }

    private appendToOutput(className: string, message: string) {
        const outputDiv = document.getElementById('output');
        if (outputDiv) {
            const messageElement = document.createElement('div');
            messageElement.className = className;
            messageElement.innerText = message;
            outputDiv.appendChild(messageElement);
        }
    }
}
