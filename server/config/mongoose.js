/**
 * Created by Kamlesh on 9/12/2014.
 */

var mongoose = require('mongoose'),
    crypto = require('crypto');

module.exports = function(config){
    mongoose.connect(config.db);
    var db=mongoose.connection;
    db.on('error',console.error.bind(console,'connection error'));
    db.once('open',function callback(){
        console.log("Multivision DB Opened");
    });

    var userSchema = mongoose.Schema({
        firstName : String,
        lastName  : String,
        userName : String,
        salt : String,
        hashed_pwd : String,
        roles : [String]
    });
    userSchema.methods = {
        authenticate: function(passwordToMatch){
         return hashPwd(this.salt,passwordToMatch) == this.hashed_pwd;
        }
    }

    var User = mongoose.model('User',userSchema);
    User.find({}).exec(function(err,collection){
     if(collection.length === 0){
         var salt,hash;

         salt = createSalt();
         hash = hashPwd(salt,'kkmeghwal');
         User.create({firstName:'Kamlesh',lastName:'Meghwal',userName:'kkmeghwal',salt:salt,hashed_pwd:hash,roles:['Admin']});

         salt = createSalt();
         hash = hashPwd(salt,'anishk');
         User.create({firstName:'Anish',lastName:'Khobragade',userName:'anishk',salt:salt,hashed_pwd:hash,roles:[]});

         salt = createSalt();
         hash = hashPwd(salt,'bdeka');
         User.create({firstName:'Bhaben',lastName:'Deka',userName:'bdeka',salt:salt,hashed_pwd:hash});
     }
    });
}

function createSalt(){
    return crypto.randomBytes(128).toString('base64');
}

function hashPwd(salt,pwd){
    var hmac = crypto.createHmac('sha1',salt);
    return hmac.update(pwd).digest('hex');
}