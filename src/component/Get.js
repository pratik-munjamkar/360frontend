import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const baseURL = "http://localhost:8000/api/Api/";

const Get = () => {
  const [Get, setGet] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setGet(response.data);
    });
  }, [Get]);

  const deleteD = (id) =>{
    axios.delete(`http://localhost:8000/api/Api/${id}`)
    .then(response=>{
      alert("user has been deleted")
    })
    .catch(error =>{
      console.log(error);
    })
  }

  if (!Get) return null;

  return (
    <div>
      <h1> DATA STORE </h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Address</th>
            <th scope="col">Phone</th>
            <th scope="col">City</th>
            <th scope="col">National</th>
          </tr>
        </thead>
        <tbody>
          {Get.map((items) => (
            <tr>
              <th scope="row">{items.name}</th>
              <td>{items.address}</td>
              <td>{items.phone}</td>
              <td>{items.city}</td>
              <td>{items.national}</td>
              <td><Link to={`/Edit/${items._id}`} className="btn btn-success">Edit</Link></td>
              <td><input type="button" className="btn btn-danger" onClick={(e)=>{deleteD(items._id)}} value={"Delete"}/></td>
            </tr>
          ))}
        </tbody>
        <Link to="/Create" style={{position:"absolute", right:"20%"}} className="btn btn-sucess">Create</Link>
      </table>
    </div>
  );
};

export default Get;
