const express=require('express');
const userController = require('../controllers/userAPI');
const router=express.Router();

router.get('/index',userController.getIndex);

router.get('/home',(req,res,next)=>{
    res.send("HomePage");
});


module.exports=router;