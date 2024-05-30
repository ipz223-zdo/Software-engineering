import { SmartTextReader } from './SmartTextReader';
import { SmartTextChecker } from './SmartTextChecker';
import { SmartTextReaderLocker } from './SmartTextReaderLocker';

function main() {
    const reader = new SmartTextReader("sample.txt");

    const checkedReader = new SmartTextChecker(reader);
    checkedReader.readText();

    const lockedReader = new SmartTextReaderLocker(reader, ".*sample.*");
    lockedReader.readText();
}

main();
