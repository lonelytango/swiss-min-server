import * as path from 'path';
import { createJsonFile, readJsonFile, writeJsonFile } from './file_utils';

async function test() {
	const TEST_FILE = path.join(__dirname, 'test_file.json');

	// Test create JSON file
	await createJsonFile(TEST_FILE);

	const dataToWrite = {
		id: 1,
		text: 'Lorem ipsum',
	};
	// Test write JSON file
	await writeJsonFile(TEST_FILE, dataToWrite);

	// Test read JSON file
	const dataToRead = await readJsonFile(TEST_FILE);
	console.log(dataToRead);
}

test();
