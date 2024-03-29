const port = 8080;

var express = require('express'),
    app = express();
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
   extended: false
}));

app.use(bodyParser.json());

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.post('/',function(req,res){
    var name = req.body.InputName;
    var email= req.body.InputEmail;
    var degree= req.body.InputClass;
    var comment = req.body.InputComments;

    res.write('Name:'+' '+name+'\n');
    res.write('Email:'+' '+email+'\n');
    res.write('Class:'+' '+degree+'\n');
    res.write('Comment:'+' '+comment);
    
    res.send();
});

app.listen(port);