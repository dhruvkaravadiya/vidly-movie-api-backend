const express = require('express')
const router = express().Router();
router.get('/',(req,res)=>{
    res.render('index',{title:'MY EXPRESS APP',message : 'Hello User'});
  });
module.exports = router;
  