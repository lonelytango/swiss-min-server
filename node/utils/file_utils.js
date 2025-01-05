const fs = require('fs').promises;

export async function readJsonFile(path) {
	try {
		const data = await fs.readFile(path, 'utf8');
		return JSON.parse(data || '{}');
	} catch (error) {
		console.error(error);
		throw error;
	}
}

export async function writeJsonFile(path, data) {
	await fs.writeFile(path, JSON.stringify(data, null, 2), 'utf8');
}
