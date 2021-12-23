const mongoose=require('mongoose');
const collegeSchema=mongoose.Schema({

    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    age:{
        type:Number
    
    },
    field:{
        type:String
    }
})

const students=mongoose.model("Collegeschema",collegeSchema)
module.exports=students