import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const params = useParams();
  //console.log(getUser,"check params")
  const Navigate = useNavigate();

  const [getUser, setUser] = useState("");

  const [name, setName] = useState(getUser.name);
  const [address, setAddress] = useState(getUser.address);
  const [phone, setPhone] = useState(getUser.phone);
  const [city, setCity] = useState(getUser.city);
  const [national, setNational] = useState(getUser.national);

  

  useEffect(() => {
    axios.get(`http://localhost:8000/api/Api/${params.id}`).then((response) => {
      setUser(response.data);
    });
  }, []);

  const submitForm = () => {
    try {
      axios({
        method: "put",
        url: `http://localhost:8000/api/Api${params.id}`,
        data: {
          name: name,
          address: address,
          phone: phone,
          city: city,
          national: national,
        },
      })
      alert("YOUR DATA SUBMITED")
      Navigate("/Get");
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div>
      <h1>EDIT FORM</h1>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            
            onChange={(e) => setName(e.target.value)}
            placeholder={getUser.name}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            className="form-control"
            
            onChange={(e) => setAddress(e.target.value)}
            placeholder={getUser.address}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="number"
            className="form-control"
            
            onChange={(e) => setPhone(e.target.value)}
            placeholder={getUser.phone}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            type="text"
            className="form-control"
            
            onChange={(e) => setCity(e.target.value)}
            placeholder={getUser.city}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="national">National</label>
          <input
            type="text"
            className="form-control"
            
            onChange={(e) => setNational(e.target.value)}
            placeholder={getUser.national}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary" onClick={submitForm}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Edit;
