const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html')
});

app.get('/online', function(req, res) {
    res.sendFile(__dirname + '/online.html')
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
      io.emit('chat message', msg)
    console.log('message: ' + msg)

    //io.emit('chat message', msg);
  });
});

http.listen(8080, function() {
    console.log('working')
});
