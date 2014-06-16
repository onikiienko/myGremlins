var connect = require('connect'),
    directory = '.';

connect()
    .use(connect.static(directory))
    .listen(3001);

console.log('Demos are ready!');