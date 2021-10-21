//Core modules of node js ->   http, https, fs, path, OS
//http and https - create server , listen a request and response as well.
//https will launch a SSL server

const hServer = require('http');

const server = hServer.createServer((req,res)=>{
    const url = req.url;
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title><head>');
        res.write('<body><form action="/message" method = "POST"><input type = "text" name = "message"><button type ="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end(); /// if we can any more write after thta, it will result in error
    }
    //console.log(req.url, req.method, req.headers);
    //process.exit(); //If you want to shut down the event Loop
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title><head>');
    res.write('<body><h1> Node Js program !!! </h1></body>');
    res.write('</html>');
    res.end(); /// if we can any more write after thta, it will result in error
});


server.listen(3000);