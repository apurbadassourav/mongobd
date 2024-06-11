const express = require('express')
const mongoose = require('mongoose');
const User =require("./model/usrsSchema")
const app = express()
const port = 3333

app.use(express.json())
 

mongoose.connect('mongodb+srv://mern:apurbamern@cluster0.fq5uhpw.mongodb.net/mern?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('Connected!'));


app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.post('/user', (req, res) => {
//   console.log(req.body)
const{firstname,lastname,email,password}=req.body

const usrs=new User({
    firstname :firstname,
    lastname :lastname,
    email :email,
    password :password
})
usrs.save()
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port} apurba`)
})