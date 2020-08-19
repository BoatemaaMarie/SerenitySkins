import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { loginUser } from '../../services/auth';
import './AuthForm.css'

export default function AuthForm(props) {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = await props.apiCall(formData);
    props.setCurrentUser(userData)
    props.history.push('/welcomepage')
  }

  return (
    <>

      <div className="body-background">

        <form className="white-out" onSubmit={handleSubmit}>
          <div className="centered-content">

            <h1 className="center">Hey Girl, Welcome to Serenity</h1>
            <h3 className="login">{props.title} Here</h3>
            <label className="username">
              Username:
        <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
            </label>
            <label className="password">
              Password:
        <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              <Link to='/WelcomePage'>
                <button className="submit" onClick={handleSubmit}>Submit</button>
              </Link>
            </label>

            {props.title === "Login" &&
              <Link to='/register' className="register">Not a memember? Register Here</Link>
            }

          </div>
        </form>

      </div>

    </>
  )
}
