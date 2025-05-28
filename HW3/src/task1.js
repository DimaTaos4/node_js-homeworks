import fs from 'node:fs/promises';
import path from 'node:path';

const folderPath = path.resolve("src", "myFolder");

// fs.mkdir(folderPath, { recursive: true }, (err) => {
//     if (err) return console.error('Ошибка при создании:', err);
//     console.log('Каталог успешно создан');

//     setTimeout(() => {
//         fs.rm(folderPath, { recursive: true }, (err) => {
//             if (err) return console.error('Ошибка при удалении:', err);
//             console.log('Каталог успешно удалён');
//         });
//     }, 5000); // 100 мс задержки
// });


async function createAndDeleteFolder() {
    try {
        await fs.mkdir(folderPath, { recursive: true });
        console.log('Каталог успешно создан');

        setTimeout(async () => {
            try {
                const files = await fs.readdir(folderPath);
                console.log('Содержимое папки:', files);

                if (files.length > 0) {
                    console.log('Папка не пуста, rmdir не может её удалить');
                    return;
                }

                await fs.rmdir(folderPath); 
                console.log('Каталог успешно удалён');
            } catch (err) {
                console.error('Ошибка при удалении:', err);
            }
        }, 4000);

    } catch (err) {
        console.error('Ошибка при создании:', err);
    }
}

createAndDeleteFolder();