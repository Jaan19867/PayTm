
const express=require("express")
const {authMiddleware}=require("../middleware")
const {AccountTable,User}=require("../db/Index")
const mongoose=require("mongoose");

const {transferFunds}=require("../transaction/transaction")

const transactionrouter=express.Router();


transactionrouter.get("/account/balance",authMiddleware,async (req,res)=>{
    console.log(req.userName)
    const {_id}=  await User.findOne( {userName: req.userName })
    console.log(_id+ " ye he user id ")
// const account= await AccountTable.findOne({username:req.username})
const account_user=await AccountTable.findOne({userId:_id})
console.log(account_user)
// console.log(account.balance + " ye he balance ")
res.json({
   balance:account_user.balance
    
})

})

transactionrouter.post("/account/transfer",authMiddleware,async (req,res)=>{
    const session = await mongoose.startSession();
    session.startTransaction();

const {amount , to}=req.body;

 const { _id } = await User.findOne({ userName: req.userName })
 const account_user = await AccountTable.findOne({ userId: _id })
 console.log(account_user +"ye he jinke account se paise bhejna he ")

 if(account_user.balance <amount){
    res.status(200).json({
        message:"Insufficient balance "
    })
 }

 const toUser=await User.findOne({userName:to});
 const toAccount=await AccountTable.findOne({userId:toUser._id })
 console.log(toAccount+ "ye he jinke paas paise bhejne he ")

// hi how are you 
 
 account_user.balance = account_user.balance - amount
 await account_user.save()


 toAccount.balance = toAccount.balance +amount
 await toAccount.save()

 await session.commitTransaction();

res.json({
    message:"You have done your work"
})
})


module.exports=transactionrouter;


//  /api/v1/user/signin
// /api/v1/user/signup
// /api/v1/user/changePassword

//  /api/v1/transaction
// /api/v1/changePassword
// jitne bhi routes honge /api/vi se hote hi jaayenge 