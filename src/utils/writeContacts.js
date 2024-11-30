import fs from 'node:fs/promises';
import path from 'node:path';

const PATH_DB = path.join('src', 'db', 'db.json');

export const writeContacts = async (updatedContacts) => {
    try {
    await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts), 'utf8');
} catch (err) {
    console.error('Помилка запису у файл:', err);
}
};
