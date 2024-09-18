import http from 'http';
import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Define __dirname in an ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const server = http.createServer(async (req, res) => {
    // Extract guest name from the URL
    const guestName = req.url.slice(1); // Remove leading '/'

    if (!guestName) {
        res.writeHead(400, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({ error: 'guest not specified' }));
        return;
    }

    try {
        // Construct the file path based on the guest name
        const filePath = join(__dirname, 'guests', `${guestName}.json`);
        const data = await readFile(filePath, 'utf-8');

        // Respond with the guest's JSON data
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(data);
    } catch (err) {
        if (err.code === 'ENOENT') {
            // Guest not found
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'guest not found' }));
        } else {
            // Server error
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'server failed' }));
        }
    }
});

// Listen on port 5000
server.listen(5000, () => {
    console.log('Server is listening on port 5000');
});
