const express = require('express')
const dotenv = require('dotenv').config();
const app = express()

const port= process.env.PORT||3001;

app.get('/api/contacts',(req,res)=>{
    res.status(200).send("get all contacts")
})

app.listen(port,()=>{
    console.log(`server is runnning on port ${port}`)
})