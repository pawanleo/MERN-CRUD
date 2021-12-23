const express=require('express');
const app=express();
const crudRoutes=require('./routes/crudroutes')
const cors=require('cors')
app.use(express.json())
app.use(cors())

app.use('/api', crudRoutes )

module.exports=app
