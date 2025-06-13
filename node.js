const https = require('https');
const fs = require('fs');
const path = require('path');

// Replace these paths with the actual paths to your wildcard cert and key
const options = {
  key: fs.readFileSync('/etc/ssl/private/your-wildcard.key'),
  cert: fs.readFileSync('/etc/ssl/certs/your-wildcard.crt')
};

https.createServer(options, (req, res) => {
  res.writeHead(200);
  res.end('Wildcard SSL is working on test-server.metrological.com\n');
}).listen(443, () => {
  console.log('HTTPS server running at https://test-server.metrological.com');
});

