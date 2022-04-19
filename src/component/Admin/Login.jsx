import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import { useNavigate } from 'react-router-dom';
import axios from "axios"






export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   const [values, setValues] = useState({
  //     // fullname: "",
  //     email: "",
  //     password: "",
  // })



  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  // const [dataIsCorrect, setDataIsCorrect] = useState(false)
  // const [errors, setErrors] = useState({});


  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('user-info')) {
      navigate("/adv")
    }
  }, [])

  async function login() {
    const item = { email, password };
    try {
      const result = await axios.post("https://nano-quiz-api.herokuapp.com/users/login", item)
      console.log("scscjhvcb",result);
      
     localStorage.setItem("user-info",result.data.token)
    if (result.data.roleId === 1)
    navigate("/adv")
    else if(result.data.roleId === 2)
    navigate("/tlist")
    else
    navigate("/")
    } catch (error) {
      console.log(error)
    }

    
    // if (this.User.token === 'ERROR') {
    //   this.showInvalidMessaqge();
    // } else {
    //   this.setLoginToken(this.User.token);
    //   if (this.User.access_Level === 'teacher') {
    //     this.router.navigate(['/teacher']);
    //   } else if (this.User.access_Level === 'stuff') {
    //     this.router.navigate(['/stuff/student']);
    //   }
    
    // const result = await fetch(`http://localhost:4000/users/login`,{
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     "Accept": "application/json"
    //   },
    //   body: item
    // });

    // result =await result.json();
    // localStorage.setItem("user-info",JSON.stringify(result))
    // navigate("/adv")

  }

  //   const login = (event) => {
  //     event.preventDefault();
  //     setErrors(Validation(values))
  //     setDataIsCorrect(true)
  //     console.log(values);
  //     axios.post(`http://localhost:4000/users/login`,
  //  values)
  //     .then(res => console.log(res.data))
  //     .catch(e => console.log(e))
  //   }


  return (
    <div className="container">
      <div className="app-wrapper">
        <Form onSubmit={handleSubmit} >

          <div className='email'>
            <Form.Group size="lg" controlId="email" className='from-wrapper'>
              <Form.Label className='label'>Email</Form.Label>
              <Form.Control
                className='input'
                autoFocus
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
          </div>

          <div className="password">

            <Form.Group size="lg" controlId="password" className='from-wrapper'>
              <Form.Label className='label'>Password</Form.Label>
              <Form.Control
                className='input'
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

          </div>
          <Button block size="lg" type="submit" disabled={!validateForm()} className='submit' onClick={login}>
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
}