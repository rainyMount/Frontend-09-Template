/*
 * @Author: xue.wang
 * @Date: 2021-04-20 23:37:21
 * @LastEditTime: 2021-04-24 23:12:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Frontend-09-Template/Week_08/server.js
 */

const http = require('http');
http.createServer((request, response) => {
    let body = [];
    request.on('error', err => {
        console.err(err);
    }).on('data', chunk => {
        body.push(chunk.toString());
        console.log(request)
    }).on('edn', () => {
        body = Buffer.concat(body).toString();
        console.log('body', body);
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end('Hello Word\n')
    }).listenerCount(8080)
});

console.log("Server started");