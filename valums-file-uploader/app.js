
/**
 * Module dependencies.
 */

var express = require('express'),
    formidable = require('formidable'),
    http = require('http'),
    fs = require('fs'),
    sys = require('sys');

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser());
  app.use(express.session({ secret: 'your secret here' }));
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
    layout : false,
    title: 'Valums File-Uploader Node Example'
  });
});


app.post('/upload', function(req, res, next){
  var uploadDir = __dirname + '/public/uploads/',
      params    = req.query;

     console.log(params);

  // HTML5 multiple file upload
  if(req.xhr){
    var fName = req.header('x-file-name'),
        fSize = req.header('x-file-size'),
        fType = req.header('x-file-type'),
        ws    = fs.createWriteStream(uploadDir + fName);

    req.on('data', function(data){
      ws.write(data);
    });
    
    req.on('end', function(){
      console.log('done');
      //console.log(ws);
      processFile(res);
    })
  }
  // Non-HTML5 single file upload
  else{
    var form = new formidable.IncomingForm();

    form.uploadDir = uploadDir;
    form.keepExtensions = true;
    form.parse(req, function(err, fields, files) {
      console.log(files);
      processFile(res);
    });
  }
});


// Centralised function to perform processing
// on file once upload is complete
var processFile = function(res){
  res.send('success');
}


app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);