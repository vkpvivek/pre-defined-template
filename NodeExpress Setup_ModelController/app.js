const express=require('express');

const app=express();

const userRoutes=require('./routes/user');

app.use(userRoutes);

app.get('/',(req,res,next)=>{
    res.send('Not found');
})

app.listen(3000);