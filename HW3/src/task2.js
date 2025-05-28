import fs from 'node:fs'
import path from 'node:path'

const filePath = path.resolve("src", "info.txt")

fs.writeFile(filePath, 'Node.js is awesome!', (err) => {
    if (err) {
        console.log(`Возникла ошибка при создании файла ${err}`);
    }
    console.log('Файл успешно создался');
    fs.readFile(filePath, 'utf-8', (err, content) => {
        if (err) {
            throw err
        } console.log(content);

    })
})

