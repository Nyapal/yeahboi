const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const path = require('path');

app.use(express.static(__dirname + '/public'));

// app.use(express.static(path.join(__dirname, 'public')));
// app.engine('.html', require('ejs').__express);
// app.set('views', __dirname + '/views');
// app.set('view engine', 'html');

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/views/index.html')
});

app.get('/online', function(req, res) {
    res.sendFile(__dirname + '/views/online.html')
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
      io.emit('chat message', msg)
  });
});

http.listen(8080, function() {
    console.log('working')
});
