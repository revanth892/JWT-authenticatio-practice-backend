const express =require('express');
const {createuser, loginuser,getaccount}= require('../controllers.js/usercontrollers.js');
const {authmiddleware} = require('../middlewares/authmiddleware.js')
const router=express.Router();

router.post("/createuser",createuser);
router.post("/loginuser",loginuser);
router.get("/accounts",authmiddleware,getaccount);

module.exports=router;