const Category=require("../models/category")



exports.createCategory=async(req,res)=>{
   
    try {

        const category=await new Category({
            name:req.body.name
         
        }).save()
        res.json(category)
        console.log("cread a category")
        
    } catch (error) {
        console.log("faied to createa ctaegory")
        
    }
}