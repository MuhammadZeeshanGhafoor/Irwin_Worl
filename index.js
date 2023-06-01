const express = require("express")
const app = express()
const cors = require("cors")
app.use(cors())
app.use(express.json())


app.get("/newRoute", (req, res)=>{
    res.send({message:"success",status:200})
    })

app.post("/register", (req, res)=>{
    console.log(req.body)
    res.send({message:"hello world", status:200})
})

app.listen(3001,()=>{
    console.log("server running")
    })


