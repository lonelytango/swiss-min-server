const fs = require('fs').promises; // Using promise-based fs

export async function readFile(path) {
	try {
		const data = await fs.readFile(path, 'utf8');
		return JSON.parse(data || '[]');
	} catch (error) {
        // File doesn't exist, create it with empty array
		if (error.code === 'ENOENT') {
			await fs.writeFile(path, '[]', 'utf8');
			return [];
		}
		throw error;
	}
}

export async function writeFile(path, data) {
	await fs.writeFile(path, JSON.stringify(data, null, 2), 'utf8');
}

