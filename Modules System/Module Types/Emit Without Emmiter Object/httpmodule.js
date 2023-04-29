const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.write('Resquest send');
        res.end();
    }
    if(req.url === '/api/list'){
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
});

server.on('connection',(socket)=>{
    console.log('New Connection');
});

server.listen(3000);

console.log('Logging on port 3000....')
