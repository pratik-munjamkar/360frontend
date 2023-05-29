import React, {useState} from 'react'
import "./Login.css";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { navigate, useNavigate } from 'react-router-dom';

const Login  = () => {
    const intialState = {
        email: "",
        password: "",
    };

    const [login, setLogin] = useState(intialState);
    const [error, setError]= useState({ color: "red", visibility:"hidden"}) 
    const navigate = useNavigate();
    const inputHandler =(e) => {
        setError({ color: "red", visibility:"hidden"});
        setLogin({...login, [e.target.name]: e.target.value})
    };
    const submitHandler = async (e)=>{
        e.preventDefault();
        //console.log(login);

        try{
            const response = await axios.get("http://localhost:8000/login")

            //console.log(response.data.users);
            const exist=response.data.users.find((user)=>{
                return user.email===login.email;
            });
            if(!exist){
                setError({color:"red", visibility:"visible"})
            }else{
                navigate("/Get")
            }

        }catch(err){}
    };
  return (
    <div className='container'>
       <div className='inner_container'>
        <h3>Login</h3>
        <form onSubmit={submitHandler}>
            <div className='box'>
                <input type= "email" placeholder='Email' name='email' onChange={inputHandler}/>
            </div>
            <div className='box'>
                <input type='password' placeholder='password' name='password' onChange={inputHandler}/>
            </div>
            <div className='box'>
                <button>LOGIN</button>

                <p>Don't have an account ? please {" "}
                    <Link to="/SignUp">
                    <b>SignUp</b>
                    </Link></p>
            </div>

            <span style={error}>Account Doesn't Exists</span>
        </form>
        </div> 
     </div>
  )
}

export default Login 