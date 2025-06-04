import express from 'express';
import fs from 'fs/promises';
import cors from 'cors';
import path from 'path';
const app = express();
app.use(cors());

app.use(async (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    const errorFilePath = path.resolve("src", "errors.log")
    try {
        throw new Error('Test async error');
    } catch (error) {
        const errorLog = `${new Date().toISOString()} - возникла ошибочка\n`;
        try {
            await fs.appendFile(errorFilePath, errorLog);
        } catch (fileError) {
            console.error('Ошибка при записи в файл логов:', fileError);
        }
        res.status(500).send('Internal Server Error');
    }
});

app.listen(3000, () => {
    console.log('🚀 Server running on port 3000');
});
