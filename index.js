const express=require('express')
const cors=require('cors')
const router =require('./routes/route.js')

const app=express();
const PORT=8080;
app.use(cors());
app.use(express.json())
app.use('/',router);
app.listen(PORT,()=>{
    console.log("Listening at port 8080")
})