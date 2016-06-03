var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

app.all('/*',function (req ,res) {
  res.send('\
    <!doctype html>\
    <html>\
      <head>\
          <title>Mean app</title>\
      </head>\
        <body>\
            <h1>Hell iam todo-app</h1>\
            <script src="bundle.js" type="text/javascript"></script>\
        </body>\
    </html>\
    ');
});

app.listen(PORT,function () {
    console.log('Server running on port'+PORT);
})
