var express            = require('express'),
    app                = express(),
    bodyParser         = require('body-parser'),
    mongoose           = require('mongoose'),
    weighinsController = require('./server/controllers/weighins-controller');

mongoose.connect('mongodb://localhost:27017/mean-from-scratch');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/client/views/index.html');
});

app.use('/js', express.static(__dirname + '/client/js'));

app.get('/api/weighins', weighinsController.list);

app.post('/api/weighins', weighinsController.create);

app.listen(3000, function() {
  console.log("Server running...");
});