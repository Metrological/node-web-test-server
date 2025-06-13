const express = require('express');
const https = require('https');
const fs = require('fs');

const app = express();
app.get('/', (req, res) => res.send('Hello from Node over HTTPS!'));

const options = {
  key: fs.readFileSync('/etc/ssl/private/metrological.com.key'),
  cert: fs.readFileSync('/etc/ssl/private/metrological.crt')
};

const os = require('os');
console.log('Hostname:', os.hostname());


https.createServer(options, (req, res) => {
  res.writeHead(200);
  res.end('Wildcard SSL is working on test-service.metrological.com\n');
}).listen(443, () => {
  console.log('HTTPS server running at https://test-service.metrological.com');
});

