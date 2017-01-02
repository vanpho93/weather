var express = require('express');
var app = express();
var parser = require('body-parser').urlencoded({extended: false});

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));
app.listen(process.env.PORT || 3000,() => console.log('Server started'));

app.get('/', require('./controller/indexRoute.js'))
