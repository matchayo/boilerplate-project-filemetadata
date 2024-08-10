var express = require('express');
var cors = require('cors');
const upload = require('./upload');
require('dotenv').config()

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/fileanalyse', upload.single("upfile"), function (req, res) {
  var resp = {
    name: req.file.filename,
    type: req.file.mimetype,
    size: req.file.size
  }
  res.send(resp);
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
