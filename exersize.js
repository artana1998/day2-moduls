import fs from 'fs';

const text = 'this is from append text';
const fileName = 'note.txt';

export function appendFileText() {
    fs.appendFile(fileName, text, function (err) {
        if (err) {
            console.log('Error appending to file', err);
            return;
        }
        console.log('The text has been appended successfully');
    });
}

export function readFileText() {
    fs.readFile(fileName, 'utf8', function (err, data) {
        if (err) {
            console.log('Error while reading file', err);
            return;
        }
        console.log('Content of the file', data);
    });
}
