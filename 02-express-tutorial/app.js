const express = require('express')
const app = express()
const logger = require('./logger')

app.get('/', logger, (req,res)=>{
    res.send('Home');
})

app.get('/about', logger, (req,res)=>{
    res.send('About');
})



app.listen(8000, ()=>{
    console.log('server is running on port 8000')
})