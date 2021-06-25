const express = require("express");
//connect with connection file 
require("./db/conn");
const Student = require("./models/students");
const app = express();
const port = process.env.PORT || 8000;
const studentRouter = require("./router/student") 

app.use(express.json());
app.use( studentRouter);
//3we  need to register our router 
//app.use(router);
 
 app.listen(port, () =>{
     console.log(`connection is setup and port number is ${port}`);
 });

 /*
1. create a new router 
const router =new express.Router()

2.we need to define the router 
router .get("/",(res,req)=>{
    res.send("hello ");
});

3.we need to register our router 
app.use(router);

 */