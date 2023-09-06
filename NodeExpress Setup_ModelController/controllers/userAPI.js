const express=require('express');
const User=require('../models/user');

exports.getIndex=(req,res,next)=>{
    res.send("Index");
};

