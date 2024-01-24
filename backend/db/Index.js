const URL=process.env.MONGO_URL
const mongoose=require("mongoose");
const { refine } = require("../zodSchema/ZodUserSchema");

mongoose.connect(URL)
.then(()=>{console.log("connected")})
.catch(()=>{console.log("error to connect ")})

// User Schema 

const UserSchema=new mongoose.Schema({
userName: String,
password: String,   
firstName: String ,
lastName: String,

})


const BankAccountSchema=new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    balance:{

        type:Number,
        required:true
    }


})



const User=mongoose.model("User",UserSchema);
const AccountTable=mongoose.model("AccountTable",BankAccountSchema);

module.exports={User,AccountTable}