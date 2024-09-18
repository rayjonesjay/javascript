import http from 'http';
import fs from 'fs';
import path from 'path';

const PORT = 5000;

// Create an HTTP server
const server = http.createServer((req, res) => {
    const guestName = req.url.slice(1); // Remove leading '/'
    const filePath = path.join(process.cwd(), 'guests', `${guestName}.json`);

    // Set response header for JSON
    res.setHeader('Content-Type', 'application/json');

    // Handle GET requests
    if (req.method === 'GET') {
        // Try to read the guest file
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                if (err.code === 'ENOENT') {
                    // File not found
                    res.writeHead(404);
                    res.end(JSON.stringify({ error: 'guest not found' }));
                } else {
                    // Server error
                    res.writeHead(500);
                    res.end(JSON.stringify({ error: 'server failed' }));
                }
            } else {
                // File found, return its content
                res.writeHead(200);
                res.end(data);
            }
        });
    } else {
        // Method not allowed
        res.writeHead(405);
        res.end(JSON.stringify({ error: 'Method not allowed' }));
    }
});

// Start the server and listen on port 5000
server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
