const http = require('http'); 
const server = http.createServer((req, res) => { 
 res.statusCode = 200; // HTTP status code for success 
 res.setHeader('Content-Type', 'text/plain'); 
 res.end('Hello, World!\n'); // Send response 
}); 
const PORT = 3000; 
server.listen(PORT, () => { 
 console.log(`Server running at http://localhost:3000`); 
}); 