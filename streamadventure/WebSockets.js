var ws = require('websocket-stream');
var stream = ws('ws://localhost:8000');
'hello\n'.pipe(stream);