  import React, { useEffect, useState } from "react";
  import axios from "axios";
  import { Navigate, useNavigate } from "react-router-dom";



  const Create = () => {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [city, setCity] = useState("");
    const [national, setNational] = useState("");


    const submitForm = () => {
      try{
        axios({
          method: 'post',
          url: 'http://localhost:8000/api/Api',
          data:{
            "name": name,
            "address": address,
            "phone": phone,
            "city": city,
            "national": national
          }
        })
        Navigate("/Get")
      }catch(error){
        console.log(error.response)

      }
    } 

    
    return (
      <div>
        <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" value={name} onChange={(e)=> setName(e.target.value)}  placeholder="Enter Name" required/>
              
            </div>


            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input type="text" className="form-control" value={address} onChange={(e)=> setAddress(e.target.value)}  placeholder="Enter Address" required/>
              
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input type="number" className="form-control" value={phone} onChange={(e)=> setPhone(e.target.value)}  placeholder="Enter Phone no." required/>
              
            </div>

            <div className="form-group">
              <label htmlFor="city">City</label>
              <input type="text" className="form-control" value={city} onChange={(e)=> setCity(e.target.value)}  placeholder="Enter City Name" required/>
              
            </div>

            <div className="form-group">
              <label htmlFor="national">National</label>
              <input type="text" className="form-control" value={national} onChange={(e)=> setNational(e.target.value)}  placeholder="Enter nationality" required/>
              
            </div>
            
            <button type="submit" className="btn btn-primary" onClick={submitForm}>Submit</button>
      </form>
      </div>
    );
  };

  export default Create;
