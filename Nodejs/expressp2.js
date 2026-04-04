//delayed response

const e1=require('express')
const app=e1();
app.get("/",(req,res)=>{
    setTimeout(()=>{
        res.send("Welcome")
    },5000)
})
app.listen(3000,()=>{
    console.log("Server is Running..")
})