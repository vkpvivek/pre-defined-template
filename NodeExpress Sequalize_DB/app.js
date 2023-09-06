const express=require('express');
const bodyParser=require('body-parser');
const sequelize=require('./util/database');

const app=express();

const userRoutes=require('./routes/user');

app.use(bodyParser.urlencoded({ extended: false }))

app.use(userRoutes);

app.get('/',(req,res,next)=>{
    res.send('Not found');
})

sequelize.sync()
    .then(result=>console.log("databse successfully setup"))
    .catch(err=>console.log(err));

app.listen(3000);