const express = require("express");
//connect with connection file 
require("./db/conn");
const Student = require("./models/students");
const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
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
 

app.patch("/Students/:id",async (req,res) => {

    try{
        const _id = req.params.id;
        const result4 = await  Student.findByIdAndUpdate(_id , req.body,{
            new:true
        });
        res.send(result4);
  
    }catch(e){
        res.status(400).send(e);
    }

});
 app.listen(port, () =>{
     console.log(`connection is setup and port number is ${port}`);
 });