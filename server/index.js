const express=require("express")
const app=express()
const mongoose=require("mongoose")
 const dotenv=require("dotenv")
 const cookiParser=require("cookie-parser")
 const cors=require("cors")
 const userRoutes=require("./routes/user.route")
 const productRoutes=require("./routes/product.route")
 const categoryRoutes=require("./routes/category.route")
 dotenv.config()




 const connect=async()=>{
   try {
      await mongoose.connect(process.env.MONGOOSE_CONNECT)
      
      console.log("connected to db")
   } catch (error) {
      console.log("failed to connect to db")
      
   }
 }



 app.use(express.json());
 
 app.use(cors());


app.use("/api",userRoutes)
app.use("/api",productRoutes)
app.use("/api",categoryRoutes)


 

 app.listen(process.env.PORT || 4500,()=>{
    console.log("connected to server")
    connect()
 })
