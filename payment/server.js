const express = require('express')
const app = express();

const port = 8082;
app.get('/',(req,res)=>{
    res.json({message:"payment called"})
})

app.get('/payment-list',(req,res)=>{
    let response = {
        data :{
            item:[
                {
                    id:1,
                    name:'payment1'
                },
                {
                    id:2,
                    name:'payment2'
                }
            ]

        }
    }

    res.status(200).json(response)
})

app.listen(port,()=>{
    console.log(`Order Service is listening at http://localhost:${port}`)
})

