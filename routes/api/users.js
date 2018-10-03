//@login &register
const express = require("express");
const router = express.Router();

const User=require("../../model/User");

//$router Get api/users/test
//@desc  返回请求的json数据
//@access public

router.get("/test", (req, res) => {
    res.json({msg: "login works"})
});


//$router Post api/users/register
//@desc  返回请求的json数据
//@access public

router.post("/register",(req,res)=>{
   // console.log(req.body);
    //查询数据库中是否拥有邮箱
    User.findOne({email:req.body.email})
        .then((user)=>{
        if(user){
            return res.status(400).json({email:"邮箱已被注册"})
        }
        else{
            const NewUser=new User({
                name:req.body.name,
                mail:req.body.email,
                avatar,
                password:req.body.password
            })
        }
    })
})
module.exports = router;