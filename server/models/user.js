const pool = require('../db');

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
        console.log(result.rowCount);
        return result.rowCount;
    }
    async UserSignUp(){
        const sql = "INSERT INTO users VALUES (DEFAULT, $1, $2, $3, $4)";
        const values = [this.username, this.password, this.Name, this.Adress];
        const result = await pool.query(sql, values);
    }

}

module.exports = User;