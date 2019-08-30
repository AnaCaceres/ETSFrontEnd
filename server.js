let express = require('express');
let port = process.env.PORT || 8080;
let serveStatic = require('serve-static');

app = express();
app.use(serveStatic(__dirname + "/dist"));

app.listen(port);