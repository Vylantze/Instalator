import express from 'express';

var app = express();

import registerControllers from './src/controllers';

app.use('/public', express.static(__dirname + '/public'));
app.use('/.build', express.static(__dirname + '/.build'));

app.set('port', process.env.PORT || 8080);

// view engine setup
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

registerControllers(app);

app.use('*', function (req,res) {
    res.render('index');
});

var server = app.listen(app.get('port'), function () {
  console.log('Server started on port 8080');
})

