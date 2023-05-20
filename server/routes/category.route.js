const express=require("express")
const router=express.Router()
const {createCategory}=require("../controllers/category.controller")
    

 




 

router.post("/category",createCategory)



//admi & products


//router.put("/product/edit/:id",editProduct)
//router.delete("/product/:id",deleteProduct)







//router.get("/product/get/:id",getSingleProduct)
 





module.exports = router;