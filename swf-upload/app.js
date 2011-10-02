
/**
 * Module dependencies.
 */

var express = require('express'),
    formidable = require('formidable');

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.logger('":method :url" :status'));
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes


app.get('/', function(req, res){
  res.render('index', {
    layout: false,
    title: 'Swfupload Node Example'
  });
});


app.post('/upload', function(req, res, next){
    var form = new formidable.IncomingForm();

    form.uploadDir = __dirname + '/public/uploads/';
    form.keepExtensions = true;
    form.parse(req, function(err, fields, files) {
      console.log(files);
      res.send('success');
    });
});



app.listen(81);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);