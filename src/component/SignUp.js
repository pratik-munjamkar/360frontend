import axios from 'axios';
import "./Signup.css"
import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {

    const intialState = {
        email: "",
        password: "",
        confromPassword: "",
    };

    const [signUp, setSignUp] = useState(intialState) 
    const [error, setError]= useState({ color: "red", visibility:"hidden"}) 
    const navigate = useNavigate()
    const inputHandler =(e) => {
        setError({ color: "red", visibility:"hidden"});
        setSignUp({...SignUp, [e.target.name]: e.target.value})
    };
    const submitHandler = async (e)=>{
        e.preventDefault();
        //console.log(signUp);
        if(signUp.password!==signUp.confromPassword){
            setError({ color: "red", visibility:"visible"});
            navigate("/SignUp")

        }
        const response = await axios.post("http://localhost:8000/signup", SignUp)
        navigate("/")
    };


  return (
    <div className='container'>
    <div className='inner_container'>
     <h3>Sign Up</h3>
     <form onSubmit={submitHandler}>
         <div className='box'>

             <input type= "email" placeholder='Email' name='email' onChange={inputHandler} />
         </div>
         <div className='box'>
             <input type='password' placeholder='password' name='password' onChange={inputHandler}/>
         </div>
         <div className='box'>
             <input type='password' placeholder='confrom password' name='password' onChange={inputHandler}/>
         </div>
         <div className='box'>
             <button>Sign UP</button>

             <p>Already have an account please {" "}
                <Link to="/">
                <b>LOGIN</b>
                </Link></p>
         </div>

         <span style={error}>Password did not match!</span>
     </form>
     </div> 
  </div>
  )
}

export default SignUp