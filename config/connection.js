const mongoose=require('mongoose')
const connection_string=process.env.DATABASE
mongoose.connect(connection_string).then((res)=>{
    console.log("MongoDB connected successfully connected with DB: cookpedia")
}).catch((err)=>{
    console.log("MongoDB connection failed")
    console.log(err)
})