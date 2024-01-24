const mongoose=require('mongoose');

const { AccountTable } = require("../db/Index")


const transferFunds= async(fromAcccountId,toAccountId,amount)=>{
    const account=await AccountTable.findById(fromAcccountId);
    account.balance=account.balance-amount;
    await account.save();
 

    const account2=await AccountTable.findById(toAccountId);
    account.balance=account.balance-amount;
    await account2.save();


}

module.exports={
    transferFunds
}