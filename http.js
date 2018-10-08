const fs = require('fs');
const http = require('http');

// server: http.Server
const server = http.createServer();

server.on('request', (req, res) => {
  // req: http.IncomingMessage
  // res: http.ServerResponse
  switch (req.url) {
    case '/about':
    case '/home':
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.end(fs.readFileSync(`.${req.url}.html`));
      break;
    case '/':
      res.writeHead(301, { Location: '/home' })
      res.end();
    default:
      res.writeHead(404)
      res.end();
  }
});

server.listen(8181);