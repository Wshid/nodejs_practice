const http = require('http'); // http 모듈 로드
// const는 최신버전의 자바스크립트에만 허용됨(ES6:)
// 상수로 할당되기 때문에 http 변수는 변하지 않는다.
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
