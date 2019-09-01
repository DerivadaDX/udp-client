# udp-client

This is a Simple udp client.

## Features
* Receive data through `stdin`.
* Can receive configuration through command line arguments.

## Configs

**--port** or **-p**: number
> Indicates the port to send data. Must be greater than 0 and less than 65536.
>
> Default: 7865.

### Example
**--port**:

    node client.js --port 1234
**-p**:

    node client.js -p 1234

**--domain** or **-d**: text/ip
> Indicates the domain to send data. Can be an ip address or a domain.
>
> Default: localhost/127.0.0.1.

### Example
**--domain**:

    node client.js --domain www.custom-domain.com
**-d**:

    node client.js -d 192.168.0.10