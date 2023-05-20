const User=require("../models/user.model")
const bcrypt=require("bcryptjs")
const dotenv=require("dotenv")
const jwt=require("jsonwebtoken")
dotenv.config()


exports.registerUser=async(req,res)=>{
  
    try {
        const salt=await bcrypt.genSalt(10);
        const hash=await bcrypt.hash(req.body.password,salt);
    
    
    
        const registred=await new User({
            username:req.body.username,
            email:req.body.email,
           password: hash
        }).save()

        


         
    res.json(registred)    
    } catch (err) {
      res.status(400).json({message:"something went wrong"})
         
    }}



    exports.loginUser=async(req,res)=>{
      try {
        const{email,password}=req.body
       // 3. check if email is taken
       const user = await User.findOne({ email });
       if (!user) {
         return res.json({ error: "User not found" });
       }
       const blocedu=await User.findOne({email})
       if(email.status === 1) return res.status(401).json("youre blocked")
       // 4. compare password
       const match = await bcrypt.compareSync(password, user.password);
       if (!match) {
         return res.json({ error: "Wrong password" });
       }
       // 5. create signed jwt
       const token = jwt.sign({ _id: user._id },"SECRETJWWWTMIDDELWARESAUTHENTICATION",{
         expiresIn: "7d",
       });
       // 7. send response
       res.json({
         user: {
           username: user.username,
           email: user.email,
           role: user.role,
          
         },
         token,
       });
     } catch (err) {
       console.log(err);
     }
   };
   //admi routes for users

   exports.getAllusers=async(req,res)=>{
    try {
      const users=await User.find({})
      res.json(users)
    } catch (error) {
      
    }
   }

   


   exports.countUsers=async(req,res)=>{
    try {
      const users=await User.find({}).count()
      res.json(users)
    } catch (error) {
      
    }
   }


   exports.removeUser=async(req,res)=>{
    try {
      await User.findByIdAndDelete(req.params.id)
      res.status(200).json("user has bee deleted")
      
    } catch (error) {
      
    }
   }

   exports.getSigleUser=async(req,res)=>{
    try {
      const user=await User.findById(req.params.id)
      res.json(user)
      
    } catch (error) {
      
    }
   }
        
        
      
    