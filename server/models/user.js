const pool = require("../config/db");

class User {
  constructor(username, password, email, userId) {
    this.userId = userId;
    this.username = username;
    this.password = password;
    this.email = email;
  }
  async login() {
    const sql = "SELECT password, userid FROM users WHERE username = $1";
    const values = [this.username];

    const result = await pool.query(sql, values);
    return result;
  }
  async signUp() {
    const sql = "INSERT INTO users VALUES (DEFAULT, $1, $2, $3)";
    const values = [this.username, this.password, this.email];
    await pool.query(sql, values);
  }
  async getAccountInfo(userId) {
    const sql = "Select * FROM users WHERE userid = $1";
    const values = [userId];
    const result = await pool.query(sql, values);
    return result;
  }
}

module.exports = User;
