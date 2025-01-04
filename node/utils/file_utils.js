const fs = require('fs').promises; // Using promise-based fs

export async function createJsonFile(path) {
	await fs.writeFile(path, '[]', 'utf8');
}

export async function readJsonFile(path) {
	try {
		const data = await fs.readFile(path, 'utf8');
		return JSON.parse(data || '[]');
	} catch (error) {
		if (error.code === 'ENOENT') {
			await fs.writeFile(path, '[]', 'utf8');
			return [];
		}
		throw error;
	}
}

export async function writeJsonFile(path, data) {
	await fs.writeFile(path, JSON.stringify(data, null, 2), 'utf8');
}
