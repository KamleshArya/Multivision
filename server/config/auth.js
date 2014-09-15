/**
 * Created by Kamlesh on 9/13/2014.
 */

var passport = require('passport');

exports.authenticate = function(req,res,next){
    var auth = passport.authenticate('local',function(err,user){
        if(err) {return next(err);}
        if(!user) {res.send({success:false});}
        req.logIn(user,function(err){
            if(err){return next(err);}
            res.send({success:true,user:user})
        });
    });
    auth(req,res,next);
};

exports.requireApiLogin = function(req,res,next){
    if(!req.isAuthenticated()) {
        res.status(403);
        res.send();
    }
    else{
        next();
    }
};

exports.requireRoles = function(role){
  return function(req,res,next){
      if(!req.isAuthenticated()|| req.user.roles.indexOf(role)=== -1){
          res.status(403);
          res.send();
      }
      else{
          next();
      }
  }
};