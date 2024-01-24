const zod=require("zod");




const User_Zod_Schema=zod.object(
 {
    userName:zod.string(),
    password:zod.string(),
    firstName:zod.string(),
    lastName:zod.string(),

    }
)

module.exports=User_Zod_Schema
