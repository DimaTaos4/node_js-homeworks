import fs from 'node:fs';
import path from 'node:path';

const filepath = path.resolve('src', 'data', 'log.txt');

export function logMessage(message) {
    const logLine = `\n${message}`;

    fs.appendFile(filepath, logLine, (err) => {
        if (err) {
            console.error('Ошибка при записи в лог:', err);
        }
    });
}
