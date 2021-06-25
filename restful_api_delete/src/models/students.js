const mongoose = require("mongoose");
const validator = require("validator");
//schema defined
const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3,
    },
    email:{
        type:String,
        required:true,
        unique:[true,"Email id already present "],
        validate(value){
            if(!validator.isEmail(value)){
                  throw new Error("Invalied Email");
                }
            }
        },
        phone:{
            type:Number,
            min:10,
            required:true,
              },
        address:{
            type:String,
            required:true,
        }
}) 

//model define 

const Student = new mongoose.model('Student',studentSchema);
//export models 
module.exports = Student;
