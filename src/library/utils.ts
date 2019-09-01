import { Arguments } from "../models";

function parseArgs(argv: string[]) {
	let args: Arguments = {};

	for (let i = 0; i < argv.length; i++) {
		switch (argv[i]) {
			case '--port':
			case '-p':
				let port = parseInt(argv[i + 1]);

				if (!isNaN(port) && port < 65536) {
					args.port = port;
				}

				break;
			case '--domain':
			case '-d':
				let domain = argv[i + 1];

				if (domain) {
					args.domain = domain;
				}
		}
	};

	return args;
}

export { parseArgs };