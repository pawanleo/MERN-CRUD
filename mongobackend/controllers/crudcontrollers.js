const students = require("../models/Collegeschema");
exports.insertOne = async (req, res) => {
  console.log(req.body);
  try {
    const data = await students.create(req.body);

    res.json({ message: "data added", data: data });
  } catch (error) {
    console.log(error);
  }
};
exports.getData = async (req, res) => {
  try {
    const data = await students.find();

    res.json({ message: "full data ", data: data });
  } catch (error) {
    console.log(error);
  }
};
exports.updateByID = async (req, res) => {
  try {
    const data = await students.updateOne(
      { _id: req.body._id },
      { $set: { age: req.body.age } }
    );

    res.json({ message: "data changes", data: data });
  } catch (error) {
    console.log(error);
  }
};



exports.deleteOne = async (req, res) => {
  try {
    const data = await students.deleteOne({ _id: req.body._id });

    res.json({ message: "data delete", data: data });
  } catch (error) {
    console.log(error);
  }
};




exports.updateStudentByParamsId = async (req, res) => {

    try {
    
      // creating dynamic query for update student
  
      const query = {};
      for (i in req.body) {
        // console.log('for in loop',req.body[i],i)
        if (req.body[i]) {
          query[i] = req.body[i];
        }
      }
  
      const data = await students.updateOne(
        { _id: req.params.id },
        { $set: query }
      );
      res.json({ message: "Student Data Updated", data: data });
    } catch (error) {
      throw new Error(error);
    }
  };
