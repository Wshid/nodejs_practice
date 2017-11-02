var express=require('express');
var app=express();
app.locals.pretty=true;

app.set('views', './views_file'); // template를 views_file로
app.set('view engine', 'jade'); // jade를 사용

app.listen(8000, function(){ // 80번 포트를 사용
  console.log('Connected, 8000 port!');
});


app.get('/topic/new', function(req, res){
  res.render('new');
});

app.post('/topic', function(req, res){
  res.send('Hi, post');
})
