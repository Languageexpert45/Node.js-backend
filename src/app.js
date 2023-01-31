const http = require('http');
const getUsers = require('./modules/users')

const hostName = "127.0.0.1";
const port = 3003;

// const params = new URLSearchParams(`name=`);


const server = http.createServer((request, response) => {

    if(request.url === '/users') {
        response.status = 200;
        response.statusMessage = "OK";
        response.header = "Content-Type: application/json";
        response.write(getUsers());
        response.end();
        return;
    }

    if (request.url === `/?hello`) {
      console.log(request.header);
      response.status = 200;
      response.statusMessage = "OK";
      response.header = "Content-Type: text/plain";
      response.write(`Hi`);
      response.end();
      return;
    }

    response.status = 200;
    response.statusMessage = "OK";
    response.header = "Content-Type: text/plain";
    response.write("Hello world!")
    response.end();

});


server.listen(port, () => {
    console.log(`сервер запущен по адресу ${hostName}:${port}`);
} )