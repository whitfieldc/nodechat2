var http = require('http');
var fs = require('fs');

var app = http.createServer(function(req, res){
  fs.readFile('client.html', 'utf-8', function(err, data){
    res.writeHead(200, {'Content-type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(1989);

