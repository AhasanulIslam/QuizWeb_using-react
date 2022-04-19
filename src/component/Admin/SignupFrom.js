import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Validation from './Validation';

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

 
    const handleFromSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values))
        setDataIsCorrect(true)
        console.log(values);
        axios.post(`https://nano-quiz-api.herokuapp.com/users/signup`,
     values)
        .then(res => console.log(res.data))
        .catch(e => console.log(e))

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
    <div className='container'>
        <div className=' app-wrapper'>
            <div>
                <h2 className='title'> Create Account </h2>
            </div>

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
  )
}

export default SignupFrom