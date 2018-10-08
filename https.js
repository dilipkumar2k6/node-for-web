const https = require('https');
const fs = require('fs');

const server = https.createServer({
  key: fs.readFileSync('./key.pem'),
  cert: fs.readFileSync('./cert.pem'),
});

server.on('request', (req, res) => {
  res.writeHead(200, { 'content-type': 'text-plain' });
  res.write('Hello world!!\n');
  res.write('Another message at ');
  setTimeout(function () {
    res.write('Yet another message at ');
  }, 1000);
});

server.listen(8443);