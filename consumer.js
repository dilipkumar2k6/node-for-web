const http = require('http');

// req: http.ClientRequest
const req = http.request({
    hostname: 'www.google.com',
    method: 'GET',
  }, (res) => {
  // res: httpIncomingMessage
    console.log(res.statusCode);
    console.log(res.headers);
    res.on('data', (data)=>{
      console.log(data.toString())
    })
  }
);

req.on('error', console.error);
console.log(req.agent); // http.Agent
req.end();