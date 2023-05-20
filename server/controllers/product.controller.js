const Product=require("../models/product")
 const cloudinary=require("../utils/cloudinary")
 


exports.createProduct=async(req,res)=>{
    
    try {
        const result = await cloudinary.uploader.upload(req.file.path);
        // Create new user
    let product = await new Product({
        name: req.body.name,
        price:req.body.price,
        desc:req.body.desc,
        quantity:req.body.quantity,
    photo: result.secure_url,
        cloudinary_id: result.public_id,
      }).save()
      // Save user
   
      res.json(product);
    } catch (err) {
      console.log(err);
    }





       
        
   
}

        
exports.getAllProduct=async(req,res)=>{

    try {
        const allProducts=await Product.find({})
        res.json(allProducts)
        
    } catch (error) {
        
    }
   
}
exports.getSingleProduct=async(req,res)=>{

}

exports.editProduct=async(req,res)=>{


    
        try {
          let product = await Product.findById(req.params.id);
          // Delete image from cloudinary
          await cloudinary.uploader.destroy(product.cloudinary_id);
          // Upload image to cloudinary
          let result;
          if (req.file) {
            result = await cloudinary.uploader.upload(req.file.path);
          }
          const data = {
            name: req.body.name || product.name,
            price:req.body.price || product.price,
            desc:req.body.desc|| product.desc,
            quantity:req.body.quantity|| product.quantity,
            sold:req.body.sold|| product.sold,





            avatar: result?.secure_url || user.avatar,
            cloudinary_id: result?.public_id || user.cloudinary_id,
          };
          product = await Product.findByIdAndUpdate(req.params.id, data, { new: true });
          res.json(product);
        } catch (err) {
          console.log(err);
        }
      }

    

   


exports.deleteProduct=async(req,res)=>{

   
}


        

        
    
        
    
