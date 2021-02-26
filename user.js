const express = require('express')
const router = express.Router()


router.get('/User/:id?/:jobId',(req,res)=>{res.send("Id="+req.params.id+" JobId="+req.params.jobId)})
router.post('/User',(req,res,next)=>{
    const user = false;
    if(user){
        res.send('hello world from user post method..')
    }else{
        return next({status: 404,message:'this user was not found.'})
    }

});


module.exports = router;