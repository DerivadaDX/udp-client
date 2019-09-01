import dgram from 'dgram';
import readline from 'readline';
import { parseArgs } from './library/utils';

const args = parseArgs(process.argv.splice(2));
const domain = args.domain || 'localhost';
const port = args.port || 7865;

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
const client = dgram.createSocket('udp4');

console.log(`Connecting with ${domain}:${port}.`);

client.on('message', (msg: Buffer, rinfo: dgram.RemoteInfo) => {
	console.log(`Received: ${msg.toString()} | From: ${rinfo.address}:${rinfo.port}.`);
});

rl
	.on('line', (line: string) => {
		if (line.toLowerCase() !== 'exit') {
			let msg = Buffer.from(line);

			client.send(msg, 0, msg.length, port, domain, (err) => {
				if (err) throw err;
				console.log('Sent:', line);
			});
			rl.prompt();
		} else {
			exit();
		}
	})
	.on('close', () => exit());

function exit() {
	console.log('Closing...');
	client.close();
	process.exit(0);
}