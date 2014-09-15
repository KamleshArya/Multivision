/**
 * Created by Kamlesh on 9/12/2014.
 */

var express =require('express'),
    stylus = require('stylus'),
    bodyParser=require('body-parser'),
    cookieParser=require('cookie-parser'),
    cookieSession=require('cookie-session'),
    morgan = require('morgan'),
    passport = require('passport');

module.exports=function(app,config){
    function compile(str,path){
        return stylus(str).set('filename',path);
    }

    app.set('views',config.rootPath + '/server/views');
    app.set('view engine','jade');

    app.use(morgan('combined'));
    app.use(cookieParser());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(cookieSession({secret:'multi vision unicode'}));
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(stylus.middleware({
        src:config.rootPath + '/public',
        compile : compile
    }));
    app.use(express.static(config.rootPath + '/public'));
}


