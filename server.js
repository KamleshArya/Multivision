/**
 * Created by Kamlesh on 8/27/2014.
 */
var express =require('express');
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var app=express();

var config = require('./server/config/config')[env];
require('./server/config/express')(app,config);
require('./server/config/mongoose')(config);
require('./server/config/passport')();
require('./server/config/routes')(app);

var host = process.env.YOUR_HOST || '0.0.0.0';
app.listen(config.port, host, function() {
    console.log('Listening on port %d', config.port);
});
