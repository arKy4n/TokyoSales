const pool = require('../db');
const {generateToken}=require('../utils/Auth');

class User {
    constructor(username, password, Name, Adress, UserId) {
        this.username = username;
        this.password = password;
        this.Name = Name;
        this.Adress=Adress;
        this.UserId = UserId;
    }
    async UserLogin(){
        console.log(this.username);
        const sql = "SELECT * FROM users WHERE username = $1 AND password = $2";
        const values = [this.username, this.password];
        const result = await pool.query(sql, values);
        this.UserId=result.rows[0].userid;
        this.Name=result.rows[0].name;
        this.address=result.rows[0].address;
        const token = generateToken(this.UserId);
        console.log(token);
        return {
            success: result.rowCount,
            token: token
        };
    }
    async UserSignUp(){
        const sql = "INSERT INTO users VALUES (DEFAULT, $1, $2, $3, $4)";
        const values = [this.username, this.password, this.Name, this.Adress];
        const result = await pool.query(sql, values);
    }
    async getData(){
        console.log("reached");
        const sql = "SELECT * FROM users WHERE userid = $1" ;
        const values=[this.UserId];
        const result = await pool.query(sql, values);
        return result;
    }

}

module.exports = User;