const fs = require('fs').promises;
import { readJsonFile, writeJsonFile } from '../file_utils';

//=============== WRITE DEMO ===============

const path = require('path');

const TEST_FILE_PATH = path.join(__dirname, 'test_file.json');
const saveData = {
	id: 1,
	location: 'forest',
};

await writeJsonFile(TEST_FILE_PATH, saveData);

//============== READ DEMO ================

const loadData = await readJsonFile(TEST_FILE_PATH);
console.log(loadData);
