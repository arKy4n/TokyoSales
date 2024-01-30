const pool = require("../config/db");

class User {
  constructor(username, password, userId, email) {
    this.userId = userId;
    this.username = username;
    this.password = password;
    this.email = email;
  }
  async login() {
    const sql = "SELECT * FROM users WHERE username = $1 AND password = $2";
    const values = [this.username, this.password];
    const result = await pool.query(sql, values);
    return result.rowCount;
  }
}

module.exports = User;
