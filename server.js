
// const express=require("express")
// const dotEnv=require("dotenv")
// const {MongoClient}=require("mongodb")

// const app=express()

// dotEnv.config()
// MongoClient.connect(process.env.MONGO_URI)
// .then(()=>{
//     console.log("MongoDB Connected Sucessfully")
// })
// .catch((error)=>{
//     console.log("Error is ", error)
// })

// const PORT=5000

// console.log(process.env)

// app.listen(PORT,()=>{
//     console.log(`Server started and running at ${PORT}`)
// })


const express=require("express")
const dotEnv=require("dotenv")
const mongoose=require("mongoose")
const bodyparser=require("body-parser")
const employeeRoutes=require('./routes/employeeRoutes')

const app=express()
const PORT=process.env.PORT || 5000

dotEnv.config()

app.use(bodyparser.json())

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("MongoDB Connected Sucessfully")
})
.catch((error)=>{
    console.log(`Error is ${error}`)
})


app.use('/employess',employeeRoutes)


app.listen(PORT,()=>{
    console.log(`Server started and running at ${PORT}`)
})
