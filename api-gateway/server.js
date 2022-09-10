const express = require('express');
const gateway = require('fast-gateway');
const port =9001;

const checkAuth=((req,res,next)=>{
    if(req.headers.token && req.headers!=''){
        next()
    }
    else{
        res.setHeader('Content-type','application/json');
        res.statusCode=401;
        res.end(JSON.stringify({status:401,message:"Authentication Failed"}))
    }
})

const server = gateway({
    routes:[
        {
            prefix:'/order',
            target:'http://localhost:8081/',
            hooks:{ }
        },
        {
            prefix:'/payment',
            target:'http://localhost:8082/',
            middlewares:[checkAuth],
            methods:['GET'],
            hooks:{ }
        }
    ]

})


server.get('/mytesting',(req,res)=>res.send('yes called gatewat'))

server.start(port).then(server=>{
    console.log('API Gateway is running at 9000 port')
})