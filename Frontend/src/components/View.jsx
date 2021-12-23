import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import Adduser from "./Adduser";
import Edituser from "./Edituser";

function View() {
  const [data, setdata] = useState([]);
  const [show, setShow] = useState(false);
  const [edited, setEdited] = useState(false);
const [deleted, setdeleted] = useState(false)
  useEffect(() => {
    axios.get("http://localhost:9001/api/allData").then((data) => {
      console.log(data.data.data);
      setdata(data.data.data);
    });
  }, [edited,deleted]);

  //put
  const [editID, seteditID] = useState();
  const handleShow = (id) => {
    setShow(true);
    seteditID(id);
  };

  const handleClose = () => setShow(false);

  const updateStudent = (data) => {
    axios
      .put(
        `http://localhost:9001/api/updateByParamsId/${editID}`,
        data
      )
      .then((res) => {
        setEdited(!edited);
        console.log("put request");
  
      })
      .catch((err) => console.log(err));
  };

  //=====DELETE======//
  const handleDelete = (id) => {
    const URL="http://localhost:9001/api/deleteByID"
   
    axios.delete(URL,{ data: { _id: id } }).then((data)=>{
        setdeleted(!deleted)
    })
  };

  return (
    <div>
      <h1>College Management</h1>

      <Adduser />

      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Field</th>
            <th>Delete/Update</th>
          </tr>
        </thead>
        <tbody>
          {data.map((ele, index) => (
            <tr key={ele._id}>
              <td>{index + 1}</td>
              <td>{ele.firstName}</td>
              <td>{ele.lastName}</td>
              <td>{ele.age}</td>
              <td>{ele.field}</td>
              <td>
                {" "}
                <Button variant="danger" onClick={() => handleDelete(ele._id)}>
                  Delete
                </Button>
                {"    "}
                <Button variant="warning" onClick={() => handleShow(ele._id)}>
                  Edit
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
        <Edituser
          show={show}
          handleClose={handleClose}
          updateStudent={updateStudent}
        />
      </Table>
    </div>
  );
}

export default View;
