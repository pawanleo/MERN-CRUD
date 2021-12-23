const express=require('express');
const { insertOne, getData, updateByID, deleteOne, updateStudentByParamsId } = require('../controllers/crudcontrollers');
const router=express.Router()




router.post("/insertOne",insertOne);

router.get("/alldata",getData);

router.patch("/updateByID",updateByID);

router.delete("/deleteByID",deleteOne);

router.put("/updateByParamsId/:id",updateStudentByParamsId)

module.exports=router