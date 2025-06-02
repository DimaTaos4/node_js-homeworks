import fs from 'node:fs/promises'
import path from 'node:path'

import 'dotenv/config'
// console.log(process.env.FILENAME);
const filerpath = path.resolve("src", process.env.FILENAME)

await fs.writeFile(filerpath, "Я только создал файл с использование fs & dotenv")
const text = await fs.readFile(filerpath, "utf-8")
console.log(text);
