const express = require('express');
const https = require('https');
const fs = require('fs');
const app = express();
const PORT = 8082;

//init mongoDB
//require('./src/db');

var privateKey = fs.readFileSync('../server.key')
var certificate = fs.readFileSync('../server.cert')

var serverConfig = {
	key : privateKey,
	cert : certificate
};

app.get('/user',(res, rsp) => {
    console.log('Endpoint /sync/user hit')
    const str = `rsp from server Endpoint /sync/user on port ${PORT}`
    rsp.send(str)
})
https.createServer(serverConfig,app).listen(PORT, () => {
    require('dns').lookup(require('os').hostname(), function (err, add, fam) {
	console.log('');
        console.log(`SYNC micro-service listening on `+ add + `:${PORT}`)
     })
})
