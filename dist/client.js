"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dgram_1 = __importDefault(require("dgram"));
var readline_1 = __importDefault(require("readline"));
var utils_1 = require("./library/utils");
var args = utils_1.parseArgs(process.argv.splice(2));
var domain = args.domain || 'localhost';
var port = args.port || 7865;
var rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout
});
var client = dgram_1.default.createSocket('udp4');
console.log("Connecting with " + domain + ":" + port + ".");
client.on('message', function (msg, rinfo) {
    console.log("Received: " + msg.toString() + " | From: " + rinfo.address + ":" + rinfo.port + ".");
});
rl
    .on('line', function (line) {
    if (line.toLowerCase() !== 'exit') {
        var msg = Buffer.from(line);
        client.send(msg, 0, msg.length, port, domain, function (err) {
            if (err)
                throw err;
            console.log('Sent:', line);
        });
        rl.prompt();
    }
    else {
        exit();
    }
})
    .on('close', function () { return exit(); });
function exit() {
    console.log('Closing...');
    client.close();
    process.exit(0);
}
//# sourceMappingURL=client.js.map