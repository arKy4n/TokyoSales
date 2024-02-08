const jwt =require('jsonwebtoken');
generateToken=(UserId)=>{
    const payload = {Id:UserId}
    const secretKey = 'Tokyo';
    const options = {expiresIn: '1h'};
    const token = jwt.sign(payload,secretKey,options);
    return token;
}

verifyToken=(req,res,next)=>{
    const token =req.headers.authorization.split(' ')[1];
    jwt.verify(token,'Tokyo',(err,decoded)=>{
        if(err){ 
            return res.status(401).json({message:'Invalid Token'});
        }
        req.user=decoded;
        next(); 
    })
};
module.exports={generateToken,verifyToken};
