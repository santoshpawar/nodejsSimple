var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs'); //extension of views
app.use(bodyParser.urlencoded({ extended: false }));
 
//mysql 
var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit : 1, //focus it
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'mydatabase1'
    
    
});

//opening view  Get

app.get('/', function(req,res){
    res.render('index');
});






app.get('/tejas', function(req,res){
    res.render('test');
});








app.get('/login', function(req, res) {

         
        res.render('login'); 
    });



app.get('/',function(req,res){
  
})
//insert data 
app.post('/insert', function(req,res){
    
   pool.getConnection(function(error,conn){
       
       var queryString = "insert into members(firstName,lastName,email,phone) values('"+req.body.fname+"','"+req.body.lname+"','"+req.body.email+"','"+req.body.phone+"')";
       
       conn.query(queryString,function(error,results){
           if(error)
               {
                   throw error;
               }
           else 
               {
                 res.send('Inserted Successfully!')
               }
           
       });
       conn.release();
   });
    
    
});
 
 

 app.post('/addFees', function(req,res){
 
 res.send(req)
 });

 
//start server

var server = app.listen(8000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

});