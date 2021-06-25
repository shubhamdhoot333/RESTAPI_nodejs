const express = require("express");
//connect with connection file 
require("./db/conn");
const Student = require("./models/students");
const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
//create a new student

app.post("/students",(req,res) => {
    console.log(req.body);
    const user = new Student(req.body) ;

    user.save().then( () => {
        res.status(201).send(user);

    }).catch((e) => { res.status(400).send(e); })

 });
 app.listen(port, () =>{
     console.log(`connection is setup and port number is ${port}`);
 });