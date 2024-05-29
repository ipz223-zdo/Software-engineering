export class FileWriter {
    write(data) {
        // console.log(`Writing data: ${data}`);
        this.appendToOutput('log', data);
    }
    writeLine(data) {
        // console.log(`Writing line: ${data}`);
        this.appendToOutput('log', `${data}\n`);
    }
    appendToOutput(className, message) {
        const outputDiv = document.getElementById('output');
        if (outputDiv) {
            const messageElement = document.createElement('div');
            messageElement.className = className;
            messageElement.innerText = message;
            outputDiv.appendChild(messageElement);
        }
    }
}
//# sourceMappingURL=FileWriter.js.map