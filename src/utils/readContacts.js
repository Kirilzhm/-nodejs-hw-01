import fs from 'node:fs/promises';
import path from 'node:path';

const PATH_DB = path.join('src', 'db', 'db.json');

export const readContacts = async () => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error('Помилка читання файлу:', err);
    }
};
