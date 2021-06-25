const express = require("express");
//connect with connection file 
require("./db/conn");
const Student = require("./models/students");
const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
//create a new student
//promiss method in then and catch method 
app.post("/students",(req,res) => {
    console.log(req.body);
    const user = new Student(req.body) ;

    user.save().then( () => {
        res.status(201).send(user);

    }).catch((e) => { res.status(400).send(e); })

 });
//async and awair method  
 app.post("/students", async(req,res) => {
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
 
 app.get("/students",async(req,res)=>{
    try{
   const result1 =await Student.find();
        res.send(result1);
        
}catch(e){

    res.send(e);
    }

 });

//get individual student data  by id 
app.get('/students/:id',async(req,res) =>{
    try{
            const _id = req.params.id;
           const result2 = await Student.findById({_id:_id});
           if(!result2)
           {
               return res.status(404).send();
           }
           else
           {
               res.send(result2);
           }
        }
    catch(e){
        res.send(e);

    }

});


 app.listen(port, () =>{
     console.log(`connection is setup and port number is ${port}`);
 });