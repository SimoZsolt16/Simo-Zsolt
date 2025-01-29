const http = require('http');

const address = "127.0.0.1";
const port = 8080;

const server = http.createServer(function (req, res)
{
    /*
        Request:
            URL: http://127.0.0.1:8080/<path>
            METHOD: GET, POST, DELETE, PATCH, PUT
            QUERY PARAMÉTEREK: http://127.0.0.1:8080/<path>?isInStock=1&priceLessThan=10000
            BODY
    */
    
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end("<html><head><title>Megcsináltad!</title></head><body><h1>Üdvözöllek a weboldalamon!</h1></body></html>");
});

server.listen(port, address, () =>
{
    console.log("Server started.");
});