const app = require("./app");
const PORT = 9001;
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://leo:pawan001@cluster0.wm8hy.mongodb.net/mongocrud?retryWrites=true&w=majority").then(data=>{
    console.log("connected to db ");
    app.listen(PORT,()=>{
        console.log(`server running ${PORT}`);
    })
}).catch(err=>{
    console.log(err);
})
