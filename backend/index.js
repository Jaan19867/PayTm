require("dotenv").config()

const UserRouter=require("./routes/User");
const transactionRouter=require("./routes/Index");
const cors=require("cors");

const express = require("express");
const app=express();
app.use(express.json());
const PORT=process.env.PORT;

console.log(process.env);
// app.use ka istemaal yeha bhi aata he routing ko set karne me 
app.use(cors())
app.use("/api/v1/user",UserRouter);
app.use("/api/v1/transact",transactionRouter);




app.get("/",(req,res)=>{
    res.send(
        {msg:"Hi how are you "}
    )
})


app.listen(PORT,()=>{
    console.log("backend is running at " + PORT)
})