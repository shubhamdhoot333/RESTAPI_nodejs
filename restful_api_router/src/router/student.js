const express= require("express");
const router =new express.Router();



//create a new student
//promiss method in then and catch method 
router.post("/students",(req,res) => {
    console.log(req.body);
    const user = new Student(req.body) ;

    user.save().then( () => {
        res.status(201).send(user);

    }).catch((e) => { res.status(400).send(e); })

 });
//async and awair method  
 router.post("/students", async(req,res) => {
     try{
    const user = new Student(req.body) ;

  const result = await user.save();
    res.status(201).send(result);
     }
     catch(err)
     {
        res.status(400).send(e);
     }

 });
 
 router.get("/",(req,res) => {
        res.send("hello everyone ");
 })

 module.exports = router;