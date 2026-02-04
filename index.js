// server creation
const http=require('http');

 const myserver=http.createServer((req,res)=>{
  console.log('server1');
  res.end('Hi! This is my first server!'); 
});

myserver.listen(8000,()=>{
  console.log('Server is running on port 8000');

});

const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    // HOME PAGE
    if (url === '/' && method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
            <html>
            <head>
                <title>Home</title>
            </head>
            <body style="text-align:center">
                <h1>ABES Engineering College</h1>
                <img src="/image" width="400" />
            </body>
            </html>
        `);
    }

    // IMAGE ROUTE
    else if (url === '/image' && method === 'GET') {
        const imagePath = path.join(__dirname, 'ABES.webp');
        const image = fs.readFileSync(imagePath);

        res.writeHead(200, { 'Content-Type': 'image/webp'});
        res.end(image);
    }

    // ABOUT PAGE
    else if (url === '/about' && method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('ABES Engineering College, Ghaziabad, Uttar Pradesh');
    }

    // CLASS PAGE
    else if (url === '/class' && method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('IT-B');
    }

    // CONTACT PAGE
    else if (url === '/contact' && method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Email-ID: info@abes.ac.in');
    }

    // ERROR PAGE
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Error : 404');
    }
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});

