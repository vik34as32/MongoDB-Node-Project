const express =require('express')
const index = require('./routes/index')
const db = require('./db/db')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/v1/popluation',index)

app.listen(2300,()=>{
    console.log(`app is running On port:2300`)
}) 