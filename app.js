var express=require('express');
var bodyParser=require('body-parser');
var app=express(); // application을 리턴함
app.locals.pretty=true;

app.set('view engine', 'jade'); // jade와 연동
app.set('views', './views'); // jade 파일의 위치
// 관습적으로 views라는 디렉토리에 넣음

app.use(express.static('public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// 사용자에 요청이 들어오면 bodyParser가 먼저 동작하여 post처리를 진행

  // 정적인 파일이 위치할 디렉토리
  // 관습적으로 public을 지정한다고 함
/* 
app.get('/topic', (req, res) => {
  var topics=[
    'Javascript is...',
    'Nodejs is ...',
    'Express is...'
  ];
  var output = `
    <a href='/topic?id=0'>JavaScript</a><br>
    <a href='/topic?id=1'>Nodejs</a><br>
    <a href='/topic?id=2'>Express</a><br>
    ${topics[req.query.id]}
  `
  res.send(output);
});
*/

app.get('/form', function(req, res){
  res.render('form');
});

app.get('/form_receiver', function(req, res){ // get방식
  var title=req.query.title;
  var description=req.query.description;
  res.send(title+","+description);
});

app.post('/form_receiver', (req, res)=>{
  var title=req.body.title; // body-parser가 있어야 동작함
  var description=req.body.description;
  res.send(title+","+description);

});

app.get('/topic/:id', (req, res) => {
  var topics=[
    'Javascript is...',
    'Nodejs is ...',
    'Express is...'
  ];
  var output = `
    <a href='/topic/0'>JavaScript</a><br>
    <a href='/topic/1'>Nodejs</a><br>
    <a href='/topic/2'>Express</a><br>
    ${topics[req.params.id]}
  `
  res.send(output);
});

app.get('/topic/:id/:mode', (req, res) => {
  res.send(req.params.id+','+req.params.mode);
});

app.get('/template', (req, res) => {
  res.render('temp', {tiverme:Date(), _title:'Jade'}); // temp라는 template 파일을 rendering함
  //views 내부에 temp.jade와 같은 내용을 넣어주어야함
});

app.get('/route', function(req, res){
  res.send('Hello Router, <img src="/test.jpg" />');
});

app.get('/dynamic', function(req, res){
  var lis='';
  for(var i=0; i<5;i++){
    lis=lis+'<li>coding</li>'
  }
  var time=Date();
  var output=`<!DOCTYPE html>
  <html>
  <head>
  </head>
  <body>
    Hello, Dynamic!
    <ul>
    ${lis}
    </ul>
    ${time}
  </body>
  </html>
  ` // ``를 사용할때, ${}로 변수를 표현할 수 있다.
  // 단 이런식으로 실행을 한다면, 동적이기 때문에 node를 재실행 시켜주어야 함

  // `` : 여러줄을 표현하는 방법, 아닐 경우 매 문장 끝마나 \를 기입해줘야함
  res.send(output);
})

// get함수는 req와 res를 인자로 가진다.
app.get('/', function(req, res){ // 사용자가 home으로 접속했을때,
  res.send('Hello home page');
});
// routing : login과 같이 특정 위치를 집어줌
// 여기서는 /login, / 와 같음
app.get('/login', function(req, res){
  res.send('<h1>login please</h1>');
});

app.listen(3000, function(){ // port 번호 지정
  console.log('Connected 3000 port!');
}); // listening 완료시 console.log를 출력
