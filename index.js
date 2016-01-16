var app = require('express')();
var multer = require('multer');

var upload = multer({ dest: './uploads/'});

/* // uncomment to allow 3rd party domain
app.all('/upload', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});
*/

// the name of file upload field in submited form is "file"
app.post('/upload', upload.single('file'), function (req, res, next) {
  console.log(req.body);
  console.log(req.file);
  res.json({status:true, id:23213});
});

app.listen(3000, function(){
  console.log('listening port 3000');
});