const express=require("express")
const router=express.Router()
  const{ deleteProduct,editProduct,getAllProduct,createProduct}=require("../controllers/product.controller")
  const upload=require("../utils/multer")
   

  //admi & products
 router.post("/product",upload.single("image"),createProduct)

 
router.put("/product/edit/:id", upload.single("image"),editProduct);





 





 







router.get("/product",getAllProduct)
//router.get("/product/get/:id",getSingleProduct)
 





module.exports = router;