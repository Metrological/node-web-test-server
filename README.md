# node-web-test-server

This is a simple Node.js HTTPS server template using a wildcard SSL certificate.

## Features

- HTTPS server using Node.js
- Wildcard SSL certificate support
- Ready for deployment with systemd

## Setup Instructions

1. **Upload your wildcard certificate files** to the EC2 instance: (Please note you can also use the TLS Deployment Livebook) 
   - `/etc/ssl/metrological/metrological.crt`
   - `/etc/ssl/metrological/metrological.com.key`

2. **Set permissions**:

   ```bash
   sudo chmod 600 /etc/ssl/private/metrological.key
   sudo chmod 644 /etc/ssl/certs/metrological.crt
   ```
