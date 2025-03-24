const { urlencoded } = require('body-parser');
const express = require('express');
const cors = require('cors');

function configExpress(app){
    app.use(express());
    app.use(express(urlencoded({extended:true})));
    app.use(express.json());
    app.use(cors({origin:'http://localhost:5173',credentials:true}))
    app.listen(3000,()=>{
        console.log('server started at:3000')
    })
}

module.exports = {configExpress}