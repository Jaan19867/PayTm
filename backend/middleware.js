const secret=process.env.JWT_SECRET

const jwt=require("jsonwebtoken")


const authMiddleware=(req,res,next)=>{


    const authHeader=req.headers.authorization;

    if(!authHeader || !authHeader.startsWith('Bearer')){
               return res.status(403).json({
                msg:"authorization is incorrect"
               })
    }

    
    const token=authHeader.split(' ')[1];
    
    try{const decoded=jwt.verify(token,secret);
      
        if(decoded.userName){
            req.userName=decoded.userName;
            console.log(req.userName)

        next();
        }
        else{
          console.log("we are here ")
            return res.status(402).json({
                msg:"not correct match up hrtr  "
            })
        }
       
    }
    catch(err){
        res.status(402).json({
            msg:"not able to do try part properly "
        })
    }
}

module.exports={
    authMiddleware
}