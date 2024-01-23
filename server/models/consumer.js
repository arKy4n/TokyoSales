const User = require('./user.js')
class consumer extends User{
    constructor(username, password){
        super(username, password);
    }

}

module.exports=consumer;