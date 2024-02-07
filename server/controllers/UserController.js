//API request

const User = require("../models/user");

   const testUserLogin = async (req, res)=>{
    const {username, password}=req.body;
    console.log(username);
    const User1= new User(username,password);
    try{
    const result = await User1.UserLogin();
      if (result.success > 0) {
          res.status(200).json({ success: true, message: 'Login successful', token: result.token });
      } else {
          res.status(401).json({ success: false, message: 'Invalid credentials' });
      }
    } catch(err){
      console.error("Error during login", err);
      res.status(500).json({ success: false, message: "Internal server error" });  
    }
  }

  const testUserSignUp = async (req, res)=>{
    const {username, password}=req.body;
    const User1= new User(username, password, name, address);
    try{
    User1.UserSignUp();
    const result = await User1.UserLogin();
      if (result > 0) {
          res.status(200).json({ success: true, message: 'SignUp successful' });
      } else {
          res.status(401).json({ success: false, message: 'Not Success' });
      }
    } catch(err){
      console.error("Error during login", err);
      res.status(500).json({ success: false, message: "Internal server error" });  
    }
  }

  const getuserData = async (req, res)=>{
    console.log("what");
    const User1= new User();
    User1.UserId=req.user.Id;
    try{
    const result = await User1.getData();
    console.log(result.rows[0]);
          res.status(200).json({ success: true, message: 'SignUp successful', userdata: result.rows[0]});
          // res.status(401).json({ success: false, message: 'Not Success' });
    } catch (err){
      console.error("Error during login", err);
      res.status(500).json({ success: false, message: "Internal server error" });  
    }
  }

module.exports = {testUserLogin, testUserSignUp, getuserData};