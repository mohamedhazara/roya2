const {check,validationResult}=require("express-validator")
 
exports.validateUser=[

    check("username").
    trim().not().isEmpty().withMessage("username shoud be entred").
    isLength({min:3,max:20}).withMessage("name should be at least 3 characters long"),
    check("email").normalizeEmail().isEmail().withMessage("plase enter a valid email"),
    check("password").trim().not().isEmpty().withMessage("password should b given").isLength({min:6,max:20}).withMessage("password should be at least 6 characrters long")
]
  exports.validate=(req,res,next)=>{
    const error=validationResult(req).array()
    if(!error.length) return next()
    res.status(400).json({success:false,error:error[0].msg})
     

  }

