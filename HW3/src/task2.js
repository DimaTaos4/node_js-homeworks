import fs from 'node:fs/promises';
import path from 'node:path';

const filePath = path.resolve("src", "info.txt");

async function createAndReadFile() {
  try {
    // Запись в файл
    await fs.writeFile(filePath, 'Node.js is awesome!');
    console.log('Файл успешно создался');

    // Чтение из файла
    const content = await fs.readFile(filePath, 'utf-8');
    console.log('Содержимое файла:', content);

  } catch (err) {
    console.error(`Произошла ошибка: ${err.message}`);
  }
}

createAndReadFile();

