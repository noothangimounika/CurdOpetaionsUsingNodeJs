
const mongoose=require("mongoose")

const employeeSchema=new mongoose.Schema({
    // emp properties are name,email,phone,city
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    phone:{
        type:Number,
        default:false
    },
    city:{
        type:String,
        require:true
    }
})
module.exports=mongoose.model('Employee',employeeSchema)