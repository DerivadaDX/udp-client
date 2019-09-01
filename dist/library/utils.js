"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function parseArgs(argv) {
    var args = {};
    for (var i = 0; i < argv.length; i++) {
        switch (argv[i]) {
            case '--port':
            case '-p':
                var port = parseInt(argv[i + 1]);
                if (!isNaN(port) && port < 65536) {
                    args.port = port;
                }
                break;
            case '--domain':
            case '-d':
                var domain = argv[i + 1];
                if (domain) {
                    args.domain = domain;
                }
        }
    }
    ;
    return args;
}
exports.parseArgs = parseArgs;
//# sourceMappingURL=utils.js.map