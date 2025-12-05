const http = require('http');

const port = 8080;


const server = http.createServer((req, res) => {

  res.statusCode = 200;

  res.setHeader('Content-Type', 'text/plain');

  res.end('Hello Karim! Your Docker Container is running successfully on port 8080.\n');
});


server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});