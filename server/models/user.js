const pool = require('../db');

class User {
    constructor(username, password, UserId, Name, Adress ) {
        this.username = username;
        this.password = password;
        this.UserId = UserId;
        this.Name = Name;
        this.Adress=Adress;
    }
    async UserLogin(){
        const sql = "SELECT * FROM users WHERE username = $1 AND password = $2";
        const values = [this.username, this.password];
        const result = await pool.query(sql, values);
        return result.rowCount;
    }
    async UserSignUp(){
        const sql = "INSERT INTO users VALUES ($1, $2, $3, $4, $5)";
        const values = [this.username, this.password, this.UserId, this.Name, this.Adress];
        const result = await pool.query(sql, values);
    }

}

module.exports = User;