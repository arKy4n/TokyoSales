const pool = require("../config/db");

class User {
  constructor(username, password, email, userId) {
    this.userId = userId;
    this.username = username;
    this.password = password;
    this.email = email;
  }
  async login() {
    const sql = "SELECT * FROM users WHERE username = $1 AND password = $2";
    const values = [this.username, this.password];
    console.log("check2");
    const result = await pool.query(sql, values);
    return result.rowCount;
  }
  async signUp() {
    const sql = "INSERT INTO users VALUES (DEFAULT, $1, $2, $3)";
    const values = [this.username, this.password, this.email];
    await pool.query(sql, values);
  }
}

module.exports = User;
