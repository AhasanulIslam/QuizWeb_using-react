import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Validation from './Validation';
import cart from "./cart.png"
import "./Login.css";
import { useNavigate } from 'react-router-dom';




const SignupFrom = ({ submitForm }) => {
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        role_id: 2
    })

    const [errors, setErrors] = useState({});

    const [dataIsCorrect, setDataIsCorrect] = useState(false)

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value, 
        })
    }

    const navigate = useNavigate();

    const handleFromSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values))
        setDataIsCorrect(true)
        console.log(values);
        axios.post(`https://nano-quiz-api.herokuapp.com/users/signup`,
     values)
        .then(res => console.log(res.data))
        .catch(e => console.log(e))

        navigate("/login")


    }

    useEffect(() => {
        if(Object.keys(errors).length === 0 && dataIsCorrect){
            // submitForm(true)
        }
    }, [errors])

    // useEffect(() => {
    //     axios.get(url, headers).then(res => {setValues(res.data)})
    //     .catch(e => console.log(e))
    // }, [])

  return (
    // <div className='container'>
    //     <div className=' app-wrapper'>
    //         <div>
    //             <h2 className='title'> Create Account </h2>
    //         </div>

    //         <form className='from-wrapper'>
    //             <div className='name'>
    //                 <label className='label'>Name</label>
    //                 <input className='input' type="text" name='name' value={values.name} onChange={handleChange}/>
    //                 {errors.name && <p className='error'>{errors.name}</p>}
    //             </div>

    //             <div className='email'>
    //                 <label className='label'>Email</label>
    //                 <input className='input' type="email"  name='email' value={values.email} onChange={handleChange}/>

    //                 {errors.email && <p className='error'>{errors.email}</p>}
    //             </div>

    //             <div className='password'>
    //                 <label className='label'>Password</label>
    //                 <input className='input' type="password" name='password' value={values.password} onChange={handleChange}/>
    //                 {errors.password && <p className='error'>{errors.password  }</p>}

    //             </div>
    //             <div>
    //                 <button className='submit' onClick={handleFromSubmit}>Sign Up</button>
    //             </div>
    //         </form>


            <div>
      <div className="login-page-10">
        <div className="row align-items-center h-100">
          <div className="col-md-5 first-part d-flex align-items-center justify-content-center flex-column">
            <h1 className="text-start w-100">Welcome to Quiz App</h1>
            <p className="text-start w-100">
              Sign in with your credentionals to enjoy this app
            </p>
            <p className="text-start w-100">Sign In Here </p>
            <img src={cart} alt="" className="my-5"/>

            <button><a href="/login">SIGN IN </a></button>
          </div>
          <div className="col-md-7 second-part d-flex flex-column align-items-end">
            <div className="text-part d-flex flex-column">
              <h1>SIGN UP</h1>


              <span>Use name, email and Password</span>

              {/* <input type="text" placeholder="username" />
              <input type="text" placeholder="password" />
              <button>LOGIN</button> */}

            <form className='from-wrapper'>
                <div className='name'>
                    <label className='label'>Name</label>
                    <input className='input' type="text" name='name' value={values.name} onChange={handleChange}/>
                    {errors.name && <p className='error'>{errors.name}</p>}
                </div>

                <div className='email'>
                    <label className='label'>Email</label>
                    <input className='input' type="email"  name='email' value={values.email} onChange={handleChange}/>

                    {errors.email && <p className='error'>{errors.email}</p>}
                </div>

                <div className='password'>
                    <label className='label'>Password</label>
                    <input className='input' type="password" name='password' value={values.password} onChange={handleChange}/>
                    {errors.password && <p className='error'>{errors.password  }</p>}

                </div>
                <div>
                    <button className='submit' onClick={handleFromSubmit}>Sign Up</button>
                </div>
            </form>
    
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignupFrom