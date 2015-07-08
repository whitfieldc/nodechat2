var http = require('http');
var fs = require('fs');

var app = http.createServer(function(req, res){
  fs.readFile('client.html', 'utf-8', function(err, data){
    res.writeHead(200, {'Content-type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(1989);

var io = require('socket.io').listen(app);

io.sockets.on('connection', function(socket){
  socket.on('message_to_server', function(data){
    io.sockets.emit('message_to_client', { message: data["message"]})
  })
})