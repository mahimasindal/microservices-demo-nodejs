const express = require('express')
const app = express();

const port = 8081;
app.get('/',(req,res)=>{
    res.json({message:"order called"})
})
app.get('/order-list',(req,res)=>{
    let response = {
        data :{
            item:[
                {
                    id:1,
                    name:'order1'
                },
                {
                    id:2,
                    name:'order2'
                }
            ]

        }
    }

    res.status(200).json(response)
})

app.listen(port,()=>{
    console.log(`Order Service is listening at http://localhost:${port}`)
})

