const express = require('express')
const data = require('../public/data.json')

const port = 3000

app.get('/',(req,res)=>{
    res.send('Kanhu')
})

app.get('/post',(req,res)=>{
    res.json(data.post)

})

app.listen(port)