/**
 * Created by Kamlesh on 9/12/2014.
 */

var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
    development:{
        db:'mongodb://localhost/multivision',
        rootPath : rootPath,
        port :process.env.PORT || 3030
    },
    production:{
        db:'mongodb://kkmeghwal:kamleshmeghwal@ds035300.mongolab.com:35300/kkmultivision',
        rootPath : rootPath,
        port : process.env.PORT || 80
    }
}
