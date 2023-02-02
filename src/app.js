const http = require('http');
const getUsers = require('./modules/users')


const hostName = "http://127.0.0.1";
const port = process.env.PORT || 3003;

const server = http.createServer((request, response) => {

  const url = new URL(request.url, hostName);
  const userName = url.searchParams.get("name");

  if (userName) {
    response.statusCode = 200;
    response.statusMessage = "OK";
    response.header = "Content-Type: text/plain";
    response.write(`Hello ${userName}`);
    response.end();
    return;
  }

  switch (request.url) {
    case ('/favicon.ico'):
      response.writeHead(200)
      
    case "/?users":
      response.statusCode = 200;
      response.statusMessage = "OK";
      response.header = "Content-Type: application/json";
      response.write(getUsers());
      response.end();
      break;

    case "/?name":
      response.statusCode = 400;
      response.statusMessage = "Bad Request";
      response.header = "Content-Type: text/plain";
      response.write(`Enter a name`);
      response.end();
      break;

    case "/":
      response.statusCode = 200;
      response.statusMessage = "OK";
      response.header = "Content-Type: text/plain";
      response.write(`Hello world`);
      response.end();
      break;

    default:
      response.statusCode = 500;
      response.statusMessage = "Internal Server Error";
      response.header = "Content-Type: text/plain";
      response.write("wrong");
      response.end();
      break;
  }

});


server.listen(port, () => {
    console.log(`сервер запущен по адресу ${hostName}:${port}`);
} )